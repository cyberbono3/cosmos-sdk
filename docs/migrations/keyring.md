# Keyring Quick Start

`keyring` is mechanism of managing private/public keys in cosmos-sdk

## Location

Core logic is located [here](../../crypto/keyring.go)

..

The `keyring` supports the following backends:

* `os` uses the operating system's default credentials store.
* `file` uses encrypted file-based keystore within the app's configuration directory. This keyring will request a password each time it is accessed, which may occur multiple times in a single command resulting in repeated password prompts.
* `kwallet` uses KDE Wallet Manager as a credentials management application.
* `pass` uses the pass command line utility to store and retrieve keys.
* `test` stores keys insecurely to disk. It does not prompt for a password to be unlocked and it should be use only for testing purposes.

## CLI commands

Usage:
  simd keys [command]

###  migrate

Migrates key information from the legacy (db-based) Keybase to the new keyring-based Keyring. The legacy Keybase used to persist keys in a LevelDB database stored in a 'keys' sub-directory of the old client application's home directory, e.g. $HOME/.gaiacli/keys/. For each key material entry, the command will prompt if the key should be skipped or not. If the key is not to be skipped, the passphrase must be entered. The key will only be migrated if the passphrase
is correct. Otherwise, the command will exit and migration must be repeated.

Usage:

migrate <old_home_dir>


Flags:
`cmd.Flags().Bool(flags.FlagDryRun, false, "Run migration without actually persisting any changes to the new Keybase")`

### Workflow
First of all, we instantiate a legacy keybase and fetch all keys from that. If dryGin flag is set to true, we create a temporary directory ( we perform dryrun without saving keys)


// TODO
Find a good boilerplate / example 

questions?

how detailed should this doc look like?
should I detail only migrate command right? or any other auxillary commands such as add?

should I detail of workflow runMigrateCmd?


https://github.com/cosmos/cosmos-sdk/pull/5097/commits/3942d28ceb0fbe9eeae8d1229062384e665745b9

The core logic is located in [here](../../client/keys/migrate.go)



### add
Adds an encrypted private key (either newly generated or recovered), encrypt it, and save to disk




### delete
Deletes the given keys 

### export
Exports private keys



### import
Import private keys into the local keybase


### list 
List all keys


### mnemonic
Compute the bip39 mnemonic for some input entropy

### parse
Parses address from hex to bech32 and vice versa

### show
Retrieves key information by name or address
















