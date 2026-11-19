# Flop Network Autonomous AI Agent

An autonomous AI agent and decentralized inference client built with `@flop-labs/sdk` for the **Flop Network** ecosystem.

## Overview

This project demonstrates how to initialize a sovereign Substrate-based agent identity (`sr25519` / SS58), manage delegated session keys, enforce daily spending budgets, and execute verifiable decentralized AI inference queries on Flop Network.

## Key Features

- **Autonomous Identity Management:** Automatically generates and secures a local SS58 keypair (`agent-key.json`) isolated from version control.
- **Budget & Risk Controls:** Enforces strict daily spending caps (`dailyCap`) and per-request cost limits (`maxInferenceCost`).
- **On-Chain Agent Wallet & Session Keys:** Integrates seamlessly with Flop Network's delegated session architecture for automated inference workflows.
- **Educational & Developer Focus:** Designed as a lightweight, reproducible reference implementation for Web3 builders and educators.

## Prerequisites

- **Node.js** v20+ (Tested on v22.22.1)
- **npm**
- Access to Flop Network RPC & Faucet endpoints (`devnet` / `testnet`)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/deno296/flop-ai-agent.git
   cd flop-ai-agent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the autonomous agent:
   ```bash
   node agent.mjs
   ```

## Security Notice

Never commit private keys, mnemonics, or local `agent-key.json` files to public repositories. Always keep sensitive credentials excluded via `.gitignore`.

## License  

   MIT

MIT
