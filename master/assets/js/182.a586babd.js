(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{675:function(t,e,o){"use strict";o.r(e);var d=o(1),a=Object(d.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"rest-endpoints-migration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest-endpoints-migration"}},[t._v("#")]),t._v(" REST Endpoints Migration")]),t._v(" "),o("p",{attrs:{synopsis:""}},[t._v("Migrate your REST endpoints to the Stargate ones.")]),t._v(" "),o("h2",{attrs:{id:"deprecation-of-legacy-rest-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deprecation-of-legacy-rest-endpoints"}},[t._v("#")]),t._v(" Deprecation of Legacy REST Endpoints")]),t._v(" "),o("p",[t._v("The Cosmos SDK versions v0.39 and earlier provided REST endpoints to query the state and broadcast transactions. These endpoints are kept in Cosmos SDK v0.40 (Stargate), but they are marked as deprecated, and will be removed in v0.41. We therefore call these endpoints legacy REST endpoints.")]),t._v(" "),o("p",[t._v("Some important information concerning all legacy REST endpoints:")]),t._v(" "),o("ul",[o("li",[t._v("Most of these endpoints are backwards-comptatible. All breaking changes are described in the next section.")]),t._v(" "),o("li",[t._v("In particular, these endpoints still output Amino JSON. Cosmos v0.40 introduced Protobuf as the default encoding library throughout the codebase, but legacy REST endpoints are one of the few places where the encoding is hardcoded to Amino. For more information about Protobuf and Amino, please read our "),o("RouterLink",{attrs:{to:"/core/encoding.html"}},[t._v("encoding guide")]),t._v(".")],1),t._v(" "),o("li",[t._v("All legacy REST endpoints include a "),o("a",{attrs:{href:"https://tools.ietf.org/id/draft-dalal-deprecation-header-01.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP deprecation header"),o("OutboundLink")],1),t._v(" which links to this document.")])]),t._v(" "),o("h2",{attrs:{id:"breaking-changes-in-legacy-rest-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes-in-legacy-rest-endpoints"}},[t._v("#")]),t._v(" Breaking Changes in Legacy REST Endpoints")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Legacy REST Endpoint")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Breaking Change")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("POST /txs")])]),t._v(" "),o("td",[t._v("Broadcast tx")]),t._v(" "),o("td",[t._v("Endpoint will error when trying to broadcast transactions that don't support Amino serialization (e.g. IBC txs)"),o("sup",[t._v("1")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /txs/encode")]),t._v(", "),o("code",[t._v("POST /txs/decode")])]),t._v(" "),o("td",[t._v("Encode/decode Amino txs from JSON to binary")]),t._v(" "),o("td",[t._v("Endpoint will error when trying to encode/decode transactions that don't support Amino serialization (e.g. IBC txs)"),o("sup",[t._v("1")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /txs/{hash}")])]),t._v(" "),o("td",[t._v("Query tx by hash")]),t._v(" "),o("td",[t._v("Endpoint will error when trying to output transactions that don't support Amino serialization (e.g. IBC txs)"),o("sup",[t._v("1")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /txs")])]),t._v(" "),o("td",[t._v("Query tx by events")]),t._v(" "),o("td",[t._v("Endpoint will error when trying to output transactions that don't support Amino serialization (e.g. IBC txs)"),o("sup",[t._v("1")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{id}/votes")]),t._v(", "),o("code",[t._v("GET /gov/proposals/{id}/votes/{voter}")])]),t._v(" "),o("td",[t._v("Gov endpoints for querying votes")]),t._v(" "),o("td",[t._v("All gov endpoints which return votes return int32 in the "),o("code",[t._v("option")]),t._v(" field instead of string: "),o("code",[t._v("1=VOTE_OPTION_YES, 2=VOTE_OPTION_ABSTAIN, 3=VOTE_OPTION_NO, 4=VOTE_OPTION_NO_WITH_VETO")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/*")])]),t._v(" "),o("td",[t._v("Staking query endpoints")]),t._v(" "),o("td",[t._v("All staking endpoints which return validators have two breaking changes. First, the validator's "),o("code",[t._v("consensus_pubkey")]),t._v(" field returns an Amino-encoded struct representing an "),o("code",[t._v("Any")]),t._v(" instead of a bech32-encoded string representing the pubkey. The "),o("code",[t._v("value")]),t._v(" field of the "),o("code",[t._v("Any")]),t._v(" is the pubkey's raw key as base64-encoded bytes. Second, the validator's "),o("code",[t._v("status")]),t._v(" field now returns an int32 instead of string: "),o("code",[t._v("1=BOND_STATUS_UNBONDED")]),t._v(", "),o("code",[t._v("2=BOND_STATUS_UNBONDING")]),t._v(", "),o("code",[t._v("3=BOND_STATUS_BONDED")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/validators")])]),t._v(" "),o("td",[t._v("Get all validators")]),t._v(" "),o("td",[t._v("BondStatus is now a protobuf enum instead of an int32, and JSON serialized using its protobuf name, so expect query parameters like "),o("code",[t._v("?status=BOND_STATUS_{BONDED,UNBONDED,UNBONDING}")]),t._v(" as opposed to "),o("code",[t._v("?status={bonded,unbonded,unbonding}")]),t._v(".")])])])]),t._v(" "),o("p",[o("sup",[t._v("1")]),t._v(": Transactions that don't support Amino serialization are the ones that contain one or more "),o("code",[t._v("Msg")]),t._v("s that are not registered with the Amino codec. Currently in the SDK, only IBC "),o("code",[t._v("Msg")]),t._v("s fall into this case.")]),t._v(" "),o("h2",{attrs:{id:"migrating-to-new-rest-endpoints"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-new-rest-endpoints"}},[t._v("#")]),t._v(" Migrating to New REST Endpoints")]),t._v(" "),o("p",[t._v("Thanks to the Protocol Buffers migration in v0.40, we are able to take advantage of a vast number of gRPC tools and solutions. For most of the legacy REST endpoints, Cosmos SDK v0.40 provides new REST endpoints generated from "),o("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[t._v("gRPC "),o("code",[t._v("Query")]),t._v(" services")]),t._v(" using "),o("a",{attrs:{href:"https://grpc-ecosystem.github.io/grpc-gateway/",target:"_blank",rel:"noopener noreferrer"}},[t._v("grpc-gateway"),o("OutboundLink")],1),t._v(". We usually call them "),o("em",[t._v("gGPC-gateway REST endpoints")]),t._v(".")],1),t._v(" "),o("p",[t._v("Some modules expose legacy "),o("code",[t._v("POST")]),t._v(" endpoints to generate unsigned transactions for their "),o("code",[t._v("Msg")]),t._v("s. These "),o("code",[t._v("POST")]),t._v(" endpoints have been removed. We recommend to use "),o("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[t._v("service "),o("code",[t._v("Msg")]),t._v("s")]),t._v(" directly, and use Protobuf to do client-side transaction generation. A guide can be found "),o("RouterLink",{attrs:{to:"/run-node/txs.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Legacy REST Endpoint")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("New gGPC-gateway REST Endpoint")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("GET /txs/{hash}")])]),t._v(" "),o("td",[t._v("Query tx by hash")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/tx/v1beta1/txs/{hash}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /txs")])]),t._v(" "),o("td",[t._v("Query tx by events")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/tx/v1beta1/txs")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /txs")])]),t._v(" "),o("td",[t._v("Broadcast tx")]),t._v(" "),o("td",[o("code",[t._v("POST /cosmos/tx/v1beta1/txs")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /txs/encode")])]),t._v(" "),o("td",[t._v("Encodes an Amino JSON tx to an Amino binary tx")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /txs/decode")])]),t._v(" "),o("td",[t._v("Decodes an Amino binary tx into an Amino JSON tx")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /bank/*")])]),t._v(" "),o("td",[t._v("Create unsigned "),o("code",[t._v("Msg")]),t._v("s for bank tx")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /bank/balances/{address}")])]),t._v(" "),o("td",[t._v("Get the balance of an address")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/bank/v1beta1/balances/{address}/{denom}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /bank/total")])]),t._v(" "),o("td",[t._v("Get the total supply of all coins")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/bank/v1beta1/supply")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /bank/total/{denom}")])]),t._v(" "),o("td",[t._v("Get the total supply of one coin")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/bank/v1beta1/supply/{denom}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /distribution/delegators/{delegatorAddr}/rewards")])]),t._v(" "),o("td",[t._v("Withdraw all delegator rewards")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /distribution/*")])]),t._v(" "),o("td",[t._v("Create unsigned "),o("code",[t._v("Msg")]),t._v("s for distribution")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/delegators/{delegatorAddr}/rewards")])]),t._v(" "),o("td",[t._v("Get the total rewards balance from all delegations")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/v1beta1/delegators/{delegator_address}/rewards")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}")])]),t._v(" "),o("td",[t._v("Query a delegation reward")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/delegators/{delegatorAddr}/rewards/{validatorAddr}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/delegators/{delegatorAddr}/withdraw_address")])]),t._v(" "),o("td",[t._v("Get the rewards withdrawal address")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/delegators/{delegatorAddr}/withdraw_address")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/validators/{validatorAddr}")])]),t._v(" "),o("td",[t._v("Validator distribution information")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/validators/{validatorAddr}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/validators/{validatorAddr}/rewards")])]),t._v(" "),o("td",[t._v("Commission and self-delegation rewards of a single a validator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/validators/{validatorAddr}/rewards")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/validators/{validatorAddr}/outstanding_rewards")])]),t._v(" "),o("td",[t._v("Outstanding rewards of a single validator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/validators/{validatorAddr}/outstanding_rewards")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/parameters")])]),t._v(" "),o("td",[t._v("Get the current distribution parameter values")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/params")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /distribution/community_pool")])]),t._v(" "),o("td",[t._v("Get the amount held in the community pool")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/distribution/v1beta1/community_pool")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /evidence/{evidence-hash}")])]),t._v(" "),o("td",[t._v("Get evidence by hash")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/evidence/v1beta1/evidence/{evidence_hash}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /evidence")])]),t._v(" "),o("td",[t._v("Get all evidence")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/evidence/v1beta1/evidence")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /gov/*")])]),t._v(" "),o("td",[t._v("Create unsigned "),o("code",[t._v("Msg")]),t._v("s for gov")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/parameters/{type}")])]),t._v(" "),o("td",[t._v("Get government parameters")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/params/{type}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals")])]),t._v(" "),o("td",[t._v("Get all proposals")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}")])]),t._v(" "),o("td",[t._v("Get proposal by id")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}/proposer")])]),t._v(" "),o("td",[t._v("Get proposer of a proposal")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}")]),t._v(" (Get proposer from "),o("code",[t._v("Proposal")]),t._v(" struct)")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}/deposits")])]),t._v(" "),o("td",[t._v("Get deposits of a proposal")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}/deposits")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}/deposits/{depositor}")])]),t._v(" "),o("td",[t._v("Get depositor a of deposit")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}/deposits/{depositor}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}/tally")])]),t._v(" "),o("td",[t._v("Get tally of a proposal")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}/tally")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}/votes")])]),t._v(" "),o("td",[t._v("Get votes of a proposal")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}/votes")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /gov/proposals/{proposal-id}/votes/{vote}")])]),t._v(" "),o("td",[t._v("Get a particular vote")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/gov/v1beta1/proposals/{proposal-id}/votes/{vote}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /minting/parameters")])]),t._v(" "),o("td",[t._v("Get parameters for minting")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/minting/v1beta1/params")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /minting/inflation")])]),t._v(" "),o("td",[t._v("Get minting inflation")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/minting/v1beta1/inflation")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /minting/annual-provisions")])]),t._v(" "),o("td",[t._v("Get minting annual provisions")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/minting/v1beta1/annual_provisions")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /slashing/*")])]),t._v(" "),o("td",[t._v("Create unsigned "),o("code",[t._v("Msg")]),t._v("s for slashing")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /slashing/validators/{validatorPubKey}/signing_info")])]),t._v(" "),o("td",[t._v("Get validator signing info")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/slashing/v1beta1/signing_infos/{cons_address}")]),t._v(" (Use consensus address instead of pubkey)")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /slashing/signing_infos")])]),t._v(" "),o("td",[t._v("Get all signing infos")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/slashing/v1beta1/signing_infos")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /slashing/parameters")])]),t._v(" "),o("td",[t._v("Get slashing parameters")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/slashing/v1beta1/params")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /staking/*")])]),t._v(" "),o("td",[t._v("Create unsigned "),o("code",[t._v("Msg")]),t._v("s for staking")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/delegations")])]),t._v(" "),o("td",[t._v("Get all delegations from a delegator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/delegations")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/unbonding_delegations")])]),t._v(" "),o("td",[t._v("Get all unbonding delegations from a delegator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/unbonding_delegations")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/txs")])]),t._v(" "),o("td",[t._v("Get all staking txs (i.e msgs) from a delegator")]),t._v(" "),o("td",[t._v("Removed")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/validators")])]),t._v(" "),o("td",[t._v("Query all validators that a delegator is bonded to")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/validators")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/validators/{validatorAddr}")])]),t._v(" "),o("td",[t._v("Query a validator that a delegator is bonded to")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/validators/{validatorAddr}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/delegations/{validatorAddr}")])]),t._v(" "),o("td",[t._v("Query a delegation between a delegator and a validator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/delegations/{validatorAddr}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr}")])]),t._v(" "),o("td",[t._v("Query all unbonding delegations between a delegator and a validator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/redelegations")])]),t._v(" "),o("td",[t._v("Query redelegations")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/v1beta1/delegators/{delegator_addr}/redelegations")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/validators")])]),t._v(" "),o("td",[t._v("Get all validators")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/validators")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/validators/{validatorAddr}")])]),t._v(" "),o("td",[t._v("Get a single validator info")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/validators/{validatorAddr}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/validators/{validatorAddr}/delegations")])]),t._v(" "),o("td",[t._v("Get all delegations to a validator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/validators/{validatorAddr}/delegations")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/validators/{validatorAddr}/unbonding_delegations")])]),t._v(" "),o("td",[t._v("Get all unbonding delegations from a validator")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/validators/{validatorAddr}/unbonding_delegations")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/historical_info/{height}")])]),t._v(" "),o("td",[t._v("Get HistoricalInfo at a given height")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/historical_info/{height}")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/pool")])]),t._v(" "),o("td",[t._v("Get the current state of the staking pool")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/pool")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /staking/parameters")])]),t._v(" "),o("td",[t._v("Get the current staking parameter values")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/staking/v1beta1/params")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("POST /upgrade/*")])]),t._v(" "),o("td",[t._v("Create unsigned "),o("code",[t._v("Msg")]),t._v("s for upgrade")]),t._v(" "),o("td",[t._v("N/A, use Protobuf directly")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /upgrade/current")])]),t._v(" "),o("td",[t._v("Get the current plan")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/upgrade/v1beta1/current_plan")])])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GET /upgrade/applied_plan/{name}")])]),t._v(" "),o("td",[t._v("Get a previously applied plan")]),t._v(" "),o("td",[o("code",[t._v("GET /cosmos/upgrade/v1beta1/applied/{name}")])])])])]),t._v(" "),o("h2",{attrs:{id:"migrating-to-grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-grpc"}},[t._v("#")]),t._v(" Migrating to gRPC")]),t._v(" "),o("p",[t._v("Instead of hitting REST endpoints as described in the previous paragraph, the SDK also exposes a gRPC server. Any client can use gRPC instead of REST to interact with the node. An overview of different ways to communicate with a node can be found "),o("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[t._v("here")]),t._v(", and a concrete tutorial for setting up a gRPC client "),o("RouterLink",{attrs:{to:"/run-node/txs.html#programmatically-with-go"}},[t._v("here")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);