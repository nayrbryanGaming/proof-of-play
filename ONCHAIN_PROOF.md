# 🔍 PROOF OF PLAY - BUKTI ON-CHAIN

## STATUS DEPLOYMENT

### ✅ DEVNET (DEPLOYED)

**Program ID:**
```
3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK
```

**Verifikasi Program di Solana Explorer:**
```
https://explorer.solana.com/address/3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK?cluster=devnet
```

**Check Program dengan Solana CLI:**
```bash
solana program show 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK --url devnet
```

### ❌ MAINNET (BELUM DEPLOY)

**Status:** Tidak ada deployment ke mainnet.

**Alasan:**
- Protokol ini masih dalam fase development/testing di Devnet
- Mainnet memerlukan:
  - Audit security lengkap
  - Testing ekstensif
  - Modal untuk deployment fee (~2-5 SOL)
  - Program ID yang berbeda

---

## CARA VERIFIKASI PROGRAM LIVE DI DEVNET

### Method 1: Solana Explorer (PALING MUDAH)

1. Buka: https://explorer.solana.com/?cluster=devnet
2. Paste Program ID: `3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK`
3. Klik Search
4. Lihat:
   - ✅ Program Account exists
   - ✅ Executable: true
   - ✅ Owner: BPFLoaderUpgradeab1e

### Method 2: Solana CLI

```bash
# Set ke devnet
solana config set --url https://api.devnet.solana.com

# Check program exists
solana program show 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK

# Expected Output:
# Program Id: 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK
# Owner: BPFLoaderUpgradeab1e...
# ProgramData Address: ...
# Authority: ...
# Last Deployed In Slot: ...
# Data Length: ... bytes
# Balance: ... SOL
```

### Method 3: Anchor Verify

```bash
cd proof_of_play
anchor verify 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK
```

---

## CARA GENERATE TRANSACTION PROOF

### Step 1: Deploy Vercel (Finish First)

Website harus live di: https://proofofplay.vercel.app

### Step 2: Connect Wallet + Airdrop SOL

1. Buka https://proofofplay.vercel.app
2. Connect wallet (Phantom/Solflare)
3. Switch wallet ke **Devnet mode**
4. Airdrop SOL: https://faucet.solana.com

### Step 3: Execute Transactions

```
1. Click "1. INITIALIZE_PDA"
   → Creates player account on-chain
   → Returns TX signature

2. Click "2. EXPLORE_DUNGEON"
   → Generates deterministic hash
   → Returns TX signature

3. Click "3. FIGHT_MONSTER"
   → Computes battle on-chain
   → Returns TX signature

4. Click "4. CLAIM_LOOT"
   → Settles reward
   → Returns TX signature
```

### Step 4: Verify on Solana Explorer

Copy TX signature dari logs, lalu:
```
https://explorer.solana.com/tx/[YOUR_SIGNATURE]?cluster=devnet
```

Ini akan show:
- ✅ Transaction confirmed
- ✅ Program invoked: 3QFQBFSLCAq...
- ✅ Logs showing game logic execution
- ✅ Account changes (PDA state)

---

## EXAMPLE TRANSACTION PROOF

**Once website is live, transactions will look like this:**

```
Transaction Signature: 
5Kx7vR3...ABC123 (example)

Explorer Link:
https://explorer.solana.com/tx/5Kx7vR3...ABC123?cluster=devnet

Proof Shows:
✅ Block: 287654321
✅ Slot: 287654321
✅ Status: Success
✅ Fee: 0.000005 SOL
✅ Program: 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK
✅ Instruction: init_player (or explore, fight, claim)
✅ Accounts Modified: [Player PDA]
✅ Logs: Combat calculation, stat updates, etc.
```

---

## CURRENT STATUS

### ✅ READY
- [x] Program deployed to Devnet
- [x] Program ID: 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK
- [x] Code built and tested locally
- [x] All instructions working (init, explore, fight, claim, equip)

### ⏳ PENDING (Requires User Action)
- [ ] Vercel deployment successful
- [ ] Website accessible at proofofplay.vercel.app
- [ ] User connects wallet
- [ ] User executes transactions
- [ ] Transaction signatures collected

### ❌ NOT APPLICABLE
- [ ] Mainnet deployment (not needed for this phase)
- [ ] Real money transactions (Devnet only)

---

## VERIFIKASI SEKARANG

**Anda bisa verify program exists RIGHT NOW:**

1. **Browser:** https://explorer.solana.com/address/3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK?cluster=devnet

2. **CLI:**
```bash
solana program show 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK --url devnet
```

**Ini membuktikan:**
- ✅ Program sudah deployed
- ✅ 100% live on Devnet
- ✅ Siap untuk receive transactions
- ✅ 0% dummy, 100% real

**Next Step:** Deploy Vercel dengan setting Root Directory = `app`, maka user bisa langsung play dan generate TX proof!

---

## WALLET AUTHORITY

Program menggunakan PDA (Program Derived Address) untuk setiap player. Ini berarti:

- **Your Wallet** = Authority (pemilik)
- **PDA Address** = Derived from: `["player", your_wallet_pubkey]`
- **Program ID** = 3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK

**Example PDA calculation:**
```typescript
const [pda] = PublicKey.findProgramAddressSync(
  [Buffer.from("player"), wallet.publicKey.toBuffer()],
  new PublicKey("3QFQBFSLCAqenWMdTaj9HBHVCjJwzD19Wz9ELvSd5fmK")
);
```

Setiap wallet punya unique PDA, semua state player disimpan di PDA tersebut.

**Bukti: Once you connect wallet, your PDA akan otomatis calculated dan visible di Explorer!**
