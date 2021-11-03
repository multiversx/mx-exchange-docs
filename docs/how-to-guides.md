---
sidebar_position: 5
---

# How To Guides

## Login

<div style={{textAlign: 'center'}}>

<img src="/docs/how-to-login.png" width="500" />

</div>

- **Maiar DeFi Wallet** - simply click the appropriate button on the web extension pop-up and you can create or import multiple different wallets and connect to different networks, such as mainnet, testnet or devnet. You can securely swap between multiple wallets and sign messages or transfer funds, without having to login again.

- **Maiar App** - scan a QR code with your Maiar App and connect your Maiar wallet to the exchange. Your Maiar app will then be used to sign all your actions on the exchange.

- **Ledger** - use your Ledger hardware wallet to connect. You will be prompted to confirm actions taken on the exchange on your device.

- **Elrond Web Wallet** - you can login using a .JSON file + password. You will be prompted to login for every action.

_Tip: As a neat trick, you can save the password in your browser. We however recommend one of the 2FA options mentioned above - Maiar or Ledger._

## Swap

<div style={{textAlign: 'center'}}>

<img src="/docs/how-to-swap.png" width="500" />

</div>

1. Log into the Maiar Exchange
2. Select “Swap” from the top menu
3. The swap interface presents you with a choice of original token and destination token
4. Select the two tokens
5. Enter the amount of original token you want swapped
6. The amount of destination token will be automatically calculated based on its current price
7. Select a slippage (default 0.5%)
8. Click continue
9. You will be asked to confirm 2 transactions (wrap EGLD, swap token), as per your login method -> confirm
10. The 2 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

## Add Liquidity

<div style={{textAlign: 'center'}}>

<img src="/docs/how-to-add-liquidity.png" width="500" />

</div>

1. Log into the Maiar Exchange
2. Select “Liquidity” from the top menu
3. Click on +Add Liquidity
4. Select the tokens you want to add liquidity for
5. Enter the amount of tokens to add
6. Select slippage (0.1% by default)
7. Click on continue
8. You will be asked to confirm 4 transactions\*, as per your login method -> confirm
9. The 4 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

The 4 transactions are: wrap EGLD, deposit token 1, deposit token 2, claim LP token.

Tip: you can add LKMEX tokens to the EGLD/MEX liquidity pool. Your LKMEX will be locked and unlocked MEX from a special reserve pool will be deposited in its stead.

## Remove Liquidity

1. Log into the Maiar Exchange
2. Select “Liquidity” from the top menu
3. Click on “My Liquidity”
4. Expand the token pair you want to remove liquidity from
5. Click “Remove”
6. Select the amount of liquidity tokens you want removed.
7. Select the Slippage (0.1% by default)
8. The actual amount of tokens will be displayed below
9. Click on “-Remove Liquidity”
10. You will be asked to confirm 2 transactions\*, as per your login method -> confirm
11. The 2 transactions will be sent, your LP tokens will be burned and your new balances will be automatically updated, pending the transactions’ execution

Tip: you need LP Tokens to be able to remove liquidity. If your “My Liquidity” is empty, remove the LP tokens from the farm first.

## MEX Farm

<div style={{textAlign: 'center'}}>

![img](/docs/mex-farm.png)

</div>

### Staking:

1. Press “Stake”
2. Select the token: MEX or LKMEX. If LKMEX, select the type of LKMEX as well
3. Decide on the rewards type: unlocked MEX for regular APR, locked MEX for 2 x APR
4. Tick the “lock rewards” box accordingly
5. Acknowledge the 1% fee for withdrawing in the first 72 hours
6. Click “Continue”
7. You will be asked to sign 2 transactions, as per your login method -> confirm
8. The 2 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

### Harvesting:

Multiple staking transactions with different rewards locking options will generate multiple individual positions in the farm. Each position is generating rewards as per the size of the position and type of rewards.

You can either harvest the rewards individually, all at once, or directly reinvest all rewards.

“Harvest” - harvests the available reward for that position. Rewards thus become available in your balances

“Reinvest” - reinvests the available reward for that position. Rewards are thus automatically staked into the farm. The rewards lock mechanism will be identical to the one for that position.

“Harvest all” - harvests all the available rewards for all the positions, at once. Rewards thus become available in your balances.

“Reinvest all” - reinvests all the available rewards for all positions. All the rewards are thus automatically staked into the farm. The rewards lock mechanisms will be identical to the respective positions.

### Withdrawing:

1. Click on “Withdraw” - notice the 1% penalty countdown, if applicable
2. Select the amount of MEX you want to withdraw
3. Click on “Continue”
4. You will be asked to sign 1 transaction, as per your login method -> confirm
5. The transaction will be sent and your new balances will be automatically updated, pending the transaction’s execution

## LP Token Farms

<div style={{textAlign: 'center'}}>

![img](/docs/lp-tokens.png)

</div>

### Staking

1. Press “Stake”
2. Select the token: the EGLD/MEX LP Farm has the option of staking locked EGLDMEX LP as well
3. Decide on the rewards type: unlocked MEX for regular APR, locked MEX for 2 x APR
4. Tick the “lock rewards” box accordingly
5. Acknowledge the 1% fee for withdrawing in the first 72 hours
6. Click “Continue”
7. You will be asked to sign 1/2 transactions, as per your login method -> confirm
8. The 1/2 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

### Harvesting

Multiple staking transactions with different rewards locking options will generate multiple individual positions in the farm. They will eventually be consolidated based on the type of reward. Each position is generating rewards as per the size of the position and type of rewards.

You can either harvest the rewards individually or all at once.

“Harvest” - harvests the available reward for that position. Rewards thus become available in your balances

“Harvest all” - harvests all the available rewards for all the positions, at once. Rewards thus become available in your balances.

### Withdrawing

1. Click on “Withdraw” - notice the 1% penalty countdown, if applicable
2. Select the amount of LP tokens you wish to withdraw.
3. Click on “Continue”
4. You will be asked to sign 1 transaction, as per your login method -> confirm
5. The transaction will be sent and your new balances will be automatically updated, pending the transaction’s execution

Tip: The corresponding amount of unclaimed rewards will be withdrawn as well.

The resulting LP tokens can be used to reclaim provided liquidity, or staked in the farm.
