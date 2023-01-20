---
sidebar_position: 4
id: token-listing
---

# Token Listing

## The listing process

Any project is, in principal, eligible for listing. A simple criteria is to have an ESDT token, either natively minted on the MultiversX blockchain, or bridged over from another ecosystem.

Important: only the token creator (i.e. holoride for $RIDE) can perform the listing process. In the initial phase, tokens can be paired with EGLD and MEX, and later on with USDC.

### 1. Register New Token

Add your token to the MultiversX Web Tools as described here [https://github.com/multiversx/mx-assets](https://github.com/multiversx/mx-assets). Once the registration process is complete, your token will be usable in the xExchange for the next steps of the listing process.

### 2. Create Pair

You will be able to create a liquidity pool for your token with either EGLD or MEX. The USDC option will become available to pools that pass certain initial criteria. New pairs will not be automatically displayed in the xExchange, but they can be imported by users in the near future.

_Note: only the token owner account can initiate the listing process. This way, token owners have control over the chosen pair and initial price._

- Select “Liquidity” from the top menu
- Go to “Active Pools” and click on the “Create New Pool” button
- Select the desired branded token and choose between pairing it with EGLD or MEX (the USDC option will be added later on)

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/create-pair.png" alt="Create Pair" width="700" />
</div>

- Click on “Generate Pool Address”

During the next step, the interface will show the pool contract address. Also, you will be able to set up your LP Token Name and Ticker (must be between 3 - 10 characters long)

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/create-token.png" alt="Create Token" width="700" />
</div>

- Click "Create LP Token"
- The next step requires you to click on Set LP Token Roles

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/set-rules.png" alt="Set Token Rules" width="700"/>
</div>

### 3. Add liquidity

Token creators will set the parity between their listed token and its pair by adding initial liquidity. The ratio between the two tokens determines the initial token price.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/add-liquidity.png" alt="Add Initial Liquidity" width="700" />
</div>

Make sure you set the right ratio between the tokens, and that you have the specified amounts available in your wallet, then click on "Add Initial Liquidity".

After the add liquidity transaction is confirmed your Liquidity Pool will be successfully created.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/token-listing/pool-successful.png" alt="Pool Generated" width="700" />
</div>

In order to be able to see your pool in the Active Pools tab, you and your supporters have to import the contract address from the previous step.

This is possible in the "Settings" menu.

Congratulations, you have created your token pair!

### 4. Enable swaps

The swap function is not enabled by default for new pairs. Initially, a minimum of $100K USD equivalent in liquidity is required to activate this function. Note that adding and removing liquidity is not restricted in any scenario.

On the testnet, make sure you reach out to a Telegram admin to quickly enable swaps for your test pairs.

### 5. Upgrade to Farm, Global Visibility & Unlock USDC pairing

Pairs with more than $1M USD weekly trading volume will be considered to be promoted, receiving their own farm. Liquidity providers will thus be able to stake their LP tokens for additional xMEX rewards, which will be allocated from the xMEX issuance.

Furthermore, the token owners will be able to create a USDC pair as well, adding new markets for their tokens and more opportunities for their token holders.
