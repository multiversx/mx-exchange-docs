---
sidebar_position: 110
id: how-to-create-a-liquidity-pool
sidebar_label: Creating a Liquidity Pool
title: How to create a Liquidity Pool on xExchange
---

## The listing process

Any project is, in principle, eligible for listing. A simple criteria is to have an ESDT token, either natively minted on the MultiversX blockchain, or bridged over from another ecosystem.

Important: Tokens can be paired only with WEGLD, USDC, MEX, LEGLD, WBTC, WETH, WDAI, USH and XEGLD.

[comment]: # "mx-context-auto"

### Register New Token

Add your token to the MultiversX Web Tools as described here [https://github.com/multiversx/mx-assets](https://github.com/multiversx/mx-assets). Once the registration process is complete, your token will be usable in the xExchange for the next steps of the listing process.

[comment]: # "mx-context-auto"

### 1. Create Pair

You will be able to create a liquidity pool for your token or any other token with the available pairing tokens.

- Click “...” from the top menu
- Click “Create Pool” menu item
- Select your desired first and second token

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/create-pool.png" alt="Create Pool" width="700" />
</div>

- Click on “Create Pool” button

During the next step, the interface will show the pool contract address. Also, you will be able to set up your LP Token Name and Ticker (must be between 3 - 10 characters long)

### 2. Create Pool Token

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/create-token.png" alt="Create Token" width="700" />
</div>

- Click "Create Pool Token"

### 3. Set Roles

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/set-roles.png" alt="Set Token Roles" width="700"/>
</div>

- Click "Create Set Roles"

[comment]: # "mx-context-auto"

### 4. Initial exchange rate

Token creators will set the parity between their listed token and its pair by adding initial liquidity. The ratio between the two tokens determines the initial token price.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/exchange-rate.png" alt="Set Initial Exchange Rate" width="700" />
</div>

Make sure you set the right ratio between the tokens, and that you have the specified amounts available in your wallet, then click on "Set initial exchange rate".

After the add liquidity transaction is confirmed, your Liquidity Pool will be successfully created.

### 5. Add liquidity

In order to enable Trade you need to add a minimum liquidity that is described on the left and is specific to each token combination.
This liquidity needs to be locked on the next step

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/add-liquidity.png" alt="Add liquidity" width="700" />
</div>

### 6. Lock liquidity

Select the minimum required LP amount.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/lock-lp.png" alt="Lock liquidity" width="700" />
</div>

You can unlock you LP after a short period of time.

[comment]: # "mx-context-auto"

### 7. Enable Trade

After executing the last transaction trade will be enabled for your pair.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/enable-trade.png" alt="Enable Trade" width="700" />
</div>

[comment]: # "mx-context-auto"

### Congratulations!

Your pool has been created and trade is enabled!

<div style={{ textAlign: 'center' }}>
    <img src="/docs/how-to/token-listing/completed.png" alt="Completed" width="700" />
</div>
