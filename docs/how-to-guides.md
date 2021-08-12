---
sidebar_position: 7
---

# How To Guides

## How to Login

- Maiar Login - scan a QR code with your Maiar App and connect your Maiar wallet to the exchange. Your Maiar app will then be used to sign all your actions on the exchange.

- Ledger - use your Ledger hardware wallet to connect. You will be prompted to confirm actions taken on the exchange on your device.

- Elrond Web wallet - you can login using a .JSON file + password. You will be prompted to login for every action.

_Tip: As a neat trick, you can save the password in your browser. We however recommend one of the 2FA options mentioned above - Maiar or Ledger._

## How to Swap

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

## How to Add Liquidity

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

## How to Remove Liquidity

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
