# SCOOP Token

- OpenZeppelin ERC20
- Hardhat
- SOLC 0.8.21

## Install

```bash
npm install
cp .env.sample .env
```

## Deploy

```bash
npx hardhat run --network ethereum "scripts/deploy.js"
```

## Verify

```bash
npx hardhat verify --contract "contracts/Scoop.sol:Scoop" --network ethereum {CA}
```
