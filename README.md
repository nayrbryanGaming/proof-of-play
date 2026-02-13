# PROOF OF PLAY

## A Protocol-First Reference Implementation for Fully On-Chain Gaming on Solana

Proof of Play is not a game demo.
It is a protocol reference.

This repository demonstrates — in the smallest, most explicit form possible — how real gameplay can be executed, verified, and persisted entirely on-chain without servers, databases, or trusted intermediaries.

The included “Dungeon” exists only as a visualizer.
The architecture is the product.

Built for the Play Solana ecosystem (PSG1-first).

## 🧠 WHY THIS EXISTS

Most “on-chain games” today are still Web2 games with wallet login.

They rely on:
- Backend servers
- Private databases
- Hidden game logic
- Trust assumptions

Proof of Play removes all of that.

No backend.
No database.
No off-chain logic.

Every action is a Solana transaction.
Every state change lives in a PDA.
Every result is verifiable on-chain.

## ⚙️ WHAT MAKES THIS DIFFERENT

This project does not compete on graphics.
It competes on architecture.

Proof of Play treats the blockchain as the game engine, not a settlement layer.

| Feature | Typical Hackathon Game | Proof of Play |
| :--- | :--- | :--- |
| **Backend** | Required | ❌ None |
| **Database** | Required | ❌ None |
| **Game Logic** | Server-side | ✅ On-chain (Anchor) |
| **State** | Private | ✅ Public PDAs |
| **Verifiability** | Limited | ✅ Solana Explorer |
| **Censorship Resistance** | ❌ | ✅ By design |

If the frontend disappears, the game still exists.

## 🏗️ ARCHITECTURE (SINGLE SOURCE OF TRUTH)

- **Anchor Program** — all game logic
- **Player PDA** — all persistent state
- **Metaplex NFTs** — functional equipment (not images)
- **Jupiter** — trustless reward swaps
- **Next.js (Vercel)** — static UI only

No servers.
No APIs.
No cron jobs.

## 🎮 ON-CHAIN GAME LOOP

1. **Init Player** → PDA created on Solana
2. **Equip NFT** → Metadata modifies stats
3. **Explore** → On-chain RNG generates event hash
4. **Fight** → Combat computed in Rust (Anchor)
5. **Claim** → Jupiter swap executes reward

Every step is a blockchain transaction.

## 📱 WHY PSG1-FIRST

- Portrait-first layout
- Large touch targets
- Stateless frontend
- Short, repeatable sessions
- Designed for handheld-native play

This is what blockchain-native gaming looks like on mobile hardware.

## ⏱️ 60-SECOND DEMO REALITY

1. Open the app
2. Connect wallet
3. Initialize player (PDA creation)
4. Explore (on-chain RNG)
5. Fight (on-chain combat)
6. Claim (Jupiter swap)

Each step produces a transaction you can inspect on Solana Explorer.

## 🎯 THE POINT

Proof of Play proves that:

- Games can run fully on-chain
- State does not require databases
- Logic does not require servers
- Transparency is a feature, not a tradeoff

This is not a toy.
This is a reference.

## 🧨 CLOSING

Proof of Play is not about how games look.
It’s about what games are allowed to be.
