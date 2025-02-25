# classcool

To install dependencies:

```bash
bun install
```

## Development Setup

Start anvil client

```sh
anvil --block-time 1
```

Compile contracts

```sh
forge build
```

Run foundry scripts

```sh
forge script script/Deploy.s.sol --broadcast --fork-url http://localhost:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

```

Generate wagmi abi

```sh
bun wagmi generate
```

Start ponder dev server

```bash
bun run dev
```
