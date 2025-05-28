---
sidebar_position: 800
id: faq
sidebar_label: FAQ
title: 🤔 Frequently Asked Questions
---

<img src="/docs/features/faq-header.webp" alt="xExchange FAQ" />

## What is xExchange?

xExchange is a DEX (Decentralized Exchange) with AMM (Automated Market Making) functions, deployed on the MultiversX Network. It is the engine for DeFi products such as swaps, liquidity pools and yield farms.

[comment]: # "mx-context-auto"

## How do I connect my wallet to xExchange?

You can connect your wallet to xExchange in many different ways: xPortal App, MultiversX DeFi Wallet, Ledger hardware wallet, keystore file (.json) + password or PEM file via the MultiversX Web Wallet.

[comment]: # "mx-context-auto"

## What are Swaps?

You can use a Swap to trade one token for another, based on the available token pairs. Because xExchange is an AMM DEX, you will always be quoted a swap price based on the availability of tokens in a swap pool. Thanks to balancing mechanisms such as arbitrage, you will always
receive a swap price that is close to the USD value of the swap, provided there is enough liquidity in the respective token pool.

[comment]: # "mx-context-auto"

## What are Liquidity Pools?

Liquidity Pools are smart contracts that hold the reserve of the two tokens that a particular Swap pair consists of. Liquidity can be deposited in token amounts that are equal in USD value or by any supported token via the Position Creator. For the first case, he exchange automatically calculates this ratio based on the amount typed in by the user.

There is no limit to the amount of tokens that can be deposited in a liquidity pool - the more, the better. The proportion between the token amounts is always x \* y = k - read the docs for an in-depth explanation.

[comment]: # "mx-context-auto"

## How to Add/Remove Liquidity

You can add tokens to the available liquidity pools by selecting the corresponding pair, i.e. TKN1/TKN2. You can only add amounts of TKN1 and TKN2 that are equal in USD value or use a third token and xExchange will convert it into equal amounts of TKN1 and TKN2 in the background.

After adding liquidity, you will receive a unique Liquidity Provider Token (LPT).

You can remove liquidity by giving back your LP token. It will be burned and you will receive the amount of TKN1 and TKN2 based on the current ratio between TKN1/TKN2 (this might be different than what it initially was), plus your share of the swap fees on the TKN1/TKN2 pair for
the period when you have provided the liquidity. Please refer to the Impermanent Loss explanation to understand the potential risks involved with providing liquidity.

[comment]: # "mx-context-auto"

## What are the LP tokens?

An LP Token (Liquidity Provider token) keeps track of your added liquidity in a certain pool. It is a unique NFT that contains information about the amounts and time of deposit. It can be used to reclaim your added liquidity and it is burned in the process. Between the time you deposit
liquidity and the moment you reclaim it, you can freely use the LP token to transfer it to another wallet or deposit it in a yield farm to get additional rewards. You are able to sell your LP tokens or leverage their value as collateral for borrowing money or other DeFi use-cases.

[comment]: # "mx-context-auto"

## What are Farms?

Farms generate yields for liquidity providers who stake their LP tokens. They are designed to incentivize long-term liquidity provision by offering an additional revenue stream. Farm rewards are usually paid in xMEX tokens, although special farms with dual-token rewards may also exist.

Liquidity providers can participate in farms by staking the LP tokens they receive from providing liquidity in a pool. After doing this, xMEX rewards will periodically become available for harvesting (base rewards can be claimed at any moment, while boosted rewards once a week, on Fridays).

[comment]: # "mx-context-auto"

## How to Use Farms?

You can deposit LP tokens in Farms to earn rewards by pressing the Add - Create Position button. For every token swap pair, a corresponding Farm is created. You can only stake TKN1/TKN2 LPT in the TKN1/TKN2 farm, for example. Farms yield xMEX rewards.

[comment]: # "mx-context-auto"

## How can I stake xMEX?

By simply holding energized xMEX in your wallet, you are already eligible for multiple simultaneous benefits, without the need to stake it as explained in the [Energy Benefits section of the docs](/xmex-and-energy/utility.md).

[comment]: # "mx-context-auto"

## How many MEX tokens are there?

The current MEX supply is 3.86T MEX tokens. The MEX token has an issuance mechanism that is designed to accelerate the xExchange adoption. It is countered by a MEX burning mechanism. This will help counter-balance inflationary aspects of the system and should do so increasingly as adoption broadens (though we do not project or promise that the overall system will become deflationary).

More details on the MEX Tokenomics can be found in the docs and here:

- [https://xexchange.com/x-exchange-economics.pdf](https://xexchange.com/x-exchange-economics.pdf)

[comment]: # "mx-context-auto"

## What are the security funds used for?

Security is a top priority. A portion of the MEX supply has been set aside for funding periodic and exhaustive security audits, as well as future bounty programs, for all the xExchange components, from smart contracts to front-end components.

[comment]: # "mx-context-auto"

## What is Wrapped EGLD?

The xExchange Smart Contracts work with ESDT tokens. EGLD is the native coin of the MultiversX Network and needs to be wrapped as an ESDT token to work in xExchange.

Wrapped EGLD is used for each action that requires EGLD, such as swapping EGLD for another token, or depositing EGLD in a liquidity pool. The wrapping and unwrapping actions are automated by the interface.

[comment]: # "mx-context-auto"

## What is the purpose of the penalty for withdrawing a liquidity deposit too early?

The 3% penalty for withdrawing liquidity from Farms/Dual Farms in the first 7 days after adding it is in place to encourage long-term liquidity providing and deter liquidity manipulation. The fee is small enough to enable flexibility for regular liquidity providers and large enough to defend against repeated deposits and withdrawals, which would have a negative impact on the stability of the liquidity pool.

Any action of depositing liquidity, such as adding more liquidity (consolidation) or staking rewards in the farm (compounding) resets the moment the user entered the position to the current epoch.

1 epoch = 24 hours. An epoch starts each day at ~15:30 UTC

[comment]: # "mx-context-auto"

## What is Impermanent Loss (IL)?

Providing liquidity can be profitable, but you’ll need to keep the concept of impermanent loss (IL) in mind. IL describes the temporary loss of funds occasionally experienced by liquidity providers because of volatility in a trading pair.

The bigger the volatility, the more you are exposed to IL as there is an irresistible opportunity for arbitrage, because the price in the LP doesn’t reflect what’s going on. In this case, the loss means less dollar value at the time of withdrawal than at the time of deposit. Impermanent loss is one of the fundamental concepts, it’s something that anyone who wants to provide liquidity to AMMs should understand.

[comment]: # "mx-context-auto"

## What is the Explore section?

The Explore section is reserved for the section that provides additional information about the exchange and its token pairs, such as price charts, volume charts, and other pieces of useful information for traders and liquidity providers.

[comment]: # "mx-context-auto"

## What is Energy? What can I do with it?

Energy is the new concept introduced with MEX 2.0. The more energy you have, the more rewards you will get.

To find out what rewards you can earn, head to the [xMEX and Energy section of the docs](/xmex-and-energy/utility.md).

[comment]: # "mx-context-auto"

## How often do I have to claim the rewards?

You should claim the rewards shown in the Portfolio section, from fees and boosted Farm, Dual Farm & Staking rewards at least once per week for maximum efficiency and compounding effects or at a maximum of four weeks.
A new weekly batch of Energy rewards becomes claimable on Friday for Farm + Fees rewards and Tuesday for Staking + Dual Farm rewards.

Important note: users will not be able to claim rewards older than four weeks.

Normal (base) Farm, Dual Farm and Staking rewards can be accrued as often as you’d like.

[comment]: # "mx-context-auto"

## Can I earn multiple rewards at the same time?

Absolutely! You can, for example, create an LP token with EGLD and MEX/xMEX of any other token, then put that LP token into the EGLD/MEX farm and earn liquidity APR there, while at the same time, earn xMEX emission rewards and fees rewards.

[comment]: # "mx-context-auto"

## Why do I need to “update Energy”?

You tell the smart contract how much Energy you currently have by doing that transaction.

You only should do it when actively getting more Energy by either locking MEX for xMEX, claiming rewards, or lengthening the lock duration on your xMEX or when actively decreasing the Energy you have by reducing the lock time or unlocking your xMEX.

Updating the Energy won’t affect the lock time of your xMEX.

If you did any of these things mentioned above but did not update the Energy, you will get fewer rewards by the next claim or in the worst case, no rewards at all.

[comment]: # "mx-context-auto"

## Can I farm normal unlocked MEX?

All farms produce xMEX rewards by default, but you can unlock those xMEX at any time and thus earn MEX as rewards for providing liquidity.
