package cli

import (
	"fmt"
	"strconv"

	"github.com/spf13/cobra"

	tmtypes "github.com/tendermint/tendermint/types"

	cli "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/state"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/cosmos-sdk/x/ibc"
	client "github.com/cosmos/cosmos-sdk/x/ibc/02-client"
	"github.com/cosmos/cosmos-sdk/x/ibc/02-client/tendermint"
	"github.com/cosmos/cosmos-sdk/x/ibc/23-commitment/merkle"
)

func mapping(cdc *codec.Codec, storeKey string, version int64) (state.Mapping, merkle.Path) {
	prefix := []byte(strconv.FormatInt(version, 10) + "/")
	return state.NewMapping(sdk.NewKVStoreKey(storeKey), cdc, prefix), merkle.NewPath([][]byte{[]byte(storeKey)}, prefix)
}

func GetQueryCmd(storeKey string, cdc *codec.Codec) *cobra.Command {
	ibcQueryCmd := &cobra.Command{
		Use:                        "client",
		Short:                      "IBC client query subcommands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
	}

	ibcQueryCmd.AddCommand(cli.GetCommands(
		GetCmdQueryConsensusState(storeKey, cdc),
		GetCmdQueryHeader(cdc),
		GetCmdQueryClient(storeKey, cdc),
	)...)
	return ibcQueryCmd
}

func GetCmdQueryClient(storeKey string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "client",
		Short: "Query stored client",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := context.NewCLIContext().WithCodec(cdc)
			mapp, path := mapping(cdc, storeKey, ibc.Version)
			man := client.NewManager(mapp)
			id := args[0]

			state, _, err := man.Object(id).ConsensusStateCLI(ctx, path)
			if err != nil {
				return err
			}

			fmt.Printf("%s\n", codec.MustMarshalJSONIndent(cdc, state))

			return nil
		},
	}
}

func GetCmdQueryConsensusState(storeKey string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "consensus-state",
		Short: "Query the latest consensus state of the running chain",
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := context.NewCLIContext().WithCodec(cdc)

			node, err := ctx.GetNode()
			if err != nil {
				return err
			}

			info, err := node.ABCIInfo()
			if err != nil {
				return err
			}

			height := info.Response.LastBlockHeight
			prevheight := height - 1

			commit, err := node.Commit(&height)
			if err != nil {
				return err
			}

			validators, err := node.Validators(&prevheight)
			if err != nil {
				return err
			}

			state := tendermint.ConsensusState{
				ChainID:          commit.ChainID,
				Height:           uint64(commit.Height),
				Root:             merkle.NewRoot(commit.AppHash),
				NextValidatorSet: tmtypes.NewValidatorSet(validators.Validators),
			}

			fmt.Printf("%s\n", codec.MustMarshalJSONIndent(cdc, state))

			return nil
		},
	}
}

func GetCmdQueryHeader(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "header",
		Short: "Query the latest header of the running chain",
		RunE: func(cmd *cobra.Command, args []string) error {
			ctx := context.NewCLIContext().WithCodec(cdc)

			node, err := ctx.GetNode()
			if err != nil {
				return err
			}

			info, err := node.ABCIInfo()
			if err != nil {
				return err
			}

			height := info.Response.LastBlockHeight
			prevheight := height - 1

			commit, err := node.Commit(&height)
			if err != nil {
				return err
			}

			validators, err := node.Validators(&prevheight)
			if err != nil {
				return err
			}

			nextvalidators, err := node.Validators(&height)
			if err != nil {
				return err
			}

			header := tendermint.Header{
				SignedHeader:     commit.SignedHeader,
				ValidatorSet:     tmtypes.NewValidatorSet(validators.Validators),
				NextValidatorSet: tmtypes.NewValidatorSet(nextvalidators.Validators),
			}

			fmt.Printf("%s\n", codec.MustMarshalJSONIndent(cdc, header))

			return nil
		},
	}
}
