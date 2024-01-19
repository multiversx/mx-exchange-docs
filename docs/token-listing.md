---
sidebar_position: 6
id: token-listing
---

[comment]: # "mx-exclude-context"

# Token Listing

[comment]: # "mx-context-auto"

## The listing process

Any project is, in principle, eligible for listing. A simple criteria is to have an ESDT token, either natively minted on the MultiversX blockchain, or bridged over from another ecosystem.

Important: only the token creator (i.e. Hatom for $HTM) can perform the listing process. In the initial phase, tokens can be paired with EGLD and USDC.

[comment]: # "mx-context-auto"

### 1. Register New Token

Add your token to the MultiversX Web Tools as described here [https://github.com/multiversx/mx-assets](https://github.com/multiversx/mx-assets). Once the registration process is complete, your token will be usable in the xExchange for the next steps of the listing process.

[comment]: # "mx-context-auto"

### 2. Create Pair

You will be able to create a liquidity pool for your token with either EGLD or USDC. New pairs will be automatically added to the Experimental category, if the token doesn’t have a pair already listed under another category. Liquidity pools listed under the Experimental category will not be automatically displayed on xExchange, unless users toggle the specific button to make them visible. Tokens from this category will have a 🧪 icon displayed next to them.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/create-pair.jpg" alt="Create Pair" width="700" />
</div>

_Note: only the token owner account can initiate the listing process. This way, token owners have control over the chosen pair and initial price._

- Select “Liquidity” from the top menu
- Go to “Active Pools” and click on the “Create New Pool” button
- Select the desired branded token and choose between pairing it with EGLD or USDC

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/create-pool.jpg" alt="Create Pool" width="700" />
</div>

- Click on “Generate Pool Address”

During the next step, the interface will show the pool contract address. Also, you will be able to set up your LP Token Name and Ticker (must be between 3 - 10 characters long)

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/create-token.jpg" alt="Create Token" width="700" />
</div>

- Click "Create LP Token"
- The next step requires you to click on “Set LP Token Roles”

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/set-roles.jpg" alt="Set Token Roles" width="700"/>
</div>

[comment]: # "mx-context-auto"

### 3. Add initial liquidity

Token creators will set the parity between their listed token and its pair by adding initial liquidity. The ratio between the two tokens determines the initial token price.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/add-liquidity.jpg" alt="Add Initial Liquidity" width="700" />
</div>

Make sure you set the right ratio between the tokens, and that you have the specified amounts available in your wallet, then click on "Add Initial Liquidity".

After the add liquidity transaction is confirmed, your Liquidity Pool will be successfully created.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/pool-successful.jpg" alt="Pool Generated" width="700" />
</div>

Reminder: Liquidity Pools listed under Experimental category become visible only by toggling the specific button, when users are logged in. Tokens from this category will have a 🧪 icon displayed next to them.

Congratulations, you have created your token pair!

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/pool-live.jpg" alt="Pool Live" width="700" />
</div>

[comment]: # "mx-context-auto"

### 4. Enable swaps

Pairs against EGLD and USDC require no listing permission. Initially, the token should be paired with a minimum of 500 $USDC or 20 $EGLD in liquidity to activate this function. This liquidity will be locked for 32 days.

As the listing process is completely permissionless (unrestricted, available to anyone), users should exercise caution and always do their own research.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/enable-swaps.jpg" alt="Enable Swaps" width="700" />
</div>

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/swaps-final.jpg" alt="Enable Final" width="700" />
</div>

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/swaps-done.jpg" alt="Enable Done" width="700" />
</div>
