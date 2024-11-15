---
sidebar_position: 8
id: how-to-guides
sidebar_label: How To Guides
title: How To Guides
---

## Login

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/connect-wallet.png" alt="Connect Wallet" width="560" />
</div>

- **MultiversX DeFi Wallet** - simply click the appropriate button on the web extension pop-up and you can create or import multiple different wallets and connect to different networks, such as mainnet, testnet or devnet. You can securely swap between multiple wallets and sign messages or transfer funds, without having to login again.
- **xPortal Mobile Wallet** - scan a QR code with your xPortal App and connect your xPortal wallet to the exchange. Your xPortal App will then be used to sign all your actions on the exchange.
- **Ledger** - use your Ledger hardware wallet to connect. You will be prompted to confirm actions taken on the exchange on your device.
- **MultiversX** **Web Wallet** - you can login using a .JSON file + password. You will be prompted to login for every action.

[comment]: # (mx-context-auto)

## Swap

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/swap-tokens.png" alt="Swap Tokens" width="560"/>
</div>

1. Log into the xExchange
2. Select “Swap” from the top menu
3. The swap interface presents you with a choice of original token (”Swap From”) and destination token (”Swap To”)
4. Select the two tokens
5. Enter the amount of original token you want swapped
6. The amount of destination token will be automatically calculated based on its current price
7. Click continue
8. You will be asked to confirm 2 transactions (wrap EGLD, swap token), as per your login method -> confirm
9. The 2 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

Tip: You can change the slippage in the settings menu.

[comment]: # (mx-context-auto)

## Add Liquidity

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/add-liquidity.png" alt="Add Liquidity" width="515" />
</div>

1. Log into the xExchange
2. Select “Liquidity” from the top menu
3. Click on “+ Add Liquidity”
4. Select the tokens you want to add liquidity for
5. Enter the amount of tokens to add
6. Click on continue
7. You will be asked to confirm 4 transactions\*, as per your login method -> confirm
8. The 4 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

\*The 4 transactions are: wrap EGLD, deposit token 1, deposit token 2, claim LP token.

**Tip**: you can add xMEX tokens to the EGLD/MEX liquidity pool. Your xMEX will be put aside and unlocked MEX from a special reserve pool will be deposited in the LP instead. After withdrawing, you will get back your original deposited xMEX (not considering IL).

[comment]: # (mx-context-auto)

## Staking

1. Press “Stake”
2. Select the token: the EGLD/MEX Farm has the option of staking EGLD**X**MEX LP as well
3. Acknowledge the fee for withdrawing in the first 72 hours
4. Click “Continue”
5. You will be asked to sign 1/2 transactions, as per your login method -> confirm
6. The 1/2 transactions will be sent and your new balances will be automatically updated, pending the transactions’ execution

[comment]: # (mx-context-auto)

## Harvesting:

You can either harvest the rewards individually, all at once, or directly reinvest all rewards. Not all options are applicable for all farms. Some are only available for Metastaking.

“Harvest” - harvests the available reward for that position. Rewards thus become available in your balances

“Reinvest” - reinvests the available reward for that position. Rewards are thus automatically staked into the farm. The rewards lock mechanism will be identical to the one for that position.

“Harvest all” - harvests all the available rewards for all the positions, at once. Rewards thus become available in your balances.

“Reinvest all” - reinvests all the available rewards for all positions. All the rewards are thus automatically staked into the farm. The rewards lock mechanisms will be identical to the respective positions.

[comment]: # (mx-context-auto)

## Withdrawing:

1. Click on “Withdraw” - notice the penalty countdown, if applicable
2. Select the amount you want to withdraw
3. Click on “Continue”
4. You will be asked to sign 1 transaction, as per your login method -> confirm
5. The transaction will be sent and your new balances will be automatically updated, pending the transaction’s execution

[comment]: # (mx-context-auto)

## Remove Liquidity

1. Log into the xExchange
2. Select “Liquidity” from the top menu
3. Click on “My Liquidity”
4. Expand the token pair you want to remove liquidity from
5. Click “Remove”
6. Select the amount of liquidity tokens you want removed.
7. The actual amount of tokens will be displayed below
8. Click on “- Remove Liquidity”
9. You will be asked to confirm 2 transactions\*, as per your login method -> confirm
10. The 2 transactions will be sent, your LP tokens will be burned and your new balances will be automatically updated, pending the transactions’ execution

**Tip**: you need LP Tokens to be able to remove liquidity. If your “My Liquidity” is empty, remove the LP tokens from the farm first.
