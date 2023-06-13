---
sidebar_position: 10
id: faq
---

[comment]: # (mx-exclude-context)

# FAQ

[comment]: # (mx-context-auto)

## What is the xExchange?

The xExchange is a DEX (Decentralized Exchange) with AMM (Automated Market Making) functions, deployed on the MultiversX Network. It is the engine for DeFi products such as swaps, liquidity pools and yield farms.

[comment]: # (mx-context-auto)

## How do I connect my wallet to xExchange?

You can connect your wallet to the xExchange in many different ways: xPortal App, MultiversX DeFi Wallet, Ledger hardware wallet, keystore file (.json) + password or PEM file via the MultiversX Web Wallet.

[comment]: # (mx-context-auto)

## What are Swaps?

You can use a Swap to trade one token for another, based on the available token pairs. Because the xExchange is an AMM DEX, you will always be quoted a swap price based on the availability of tokens in a swap pool. Thanks to balancing mechanisms such as arbitrage, you will always
receive a swap price that is close to the USD value of the swap, provided there is enough liquidity in the respective token pool.

[comment]: # (mx-context-auto)

## What are Liquidity Pools?

Liquidity Pools are smart contracts that hold the reserve of the two tokens a particular Swap pair consists of. Liquidity can be deposited in token amounts that are equal in USD value. The exchange automatically calculates this ratio based on the amount typed in by the user.

There is no limit to the amount of tokens that can be deposited in a liquidity pool - the more, the better. The proportion between the token amounts is always x \* y = k - read the docs for an in-depth explanation.

[comment]: # (mx-context-auto)

## How to Add/Remove Liquidity

You can add tokens to the available liquidity pools by selecting the corresponding pair, i.e. TKN1/TKN2. You can only add amounts of TKN1 and TKN2 that are equal in USD value.

After adding liquidity, you will receive a unique Liquidity Provider Token (LPT).

You can remove liquidity by giving back your LP token. It will be burned and you will receive the amount of TKN1 and TKN2 based on the current ratio between TKN1/TKN2 (this might be different than what it initially was), plus your share of the swap fees on the TKN1/TKN2 pair for
the period when you have provided the liquidity. Please refer to the Impermanent Loss explanation to understand the potential risks involved with providing liquidity.

[comment]: # (mx-context-auto)

## What are the LP tokens?

An LP Token (Liquidity Provider token) keeps track of your added liquidity in a certain pool. It is a unique NFT that contains information about the amounts and time of deposit. It can be used to reclaim your added liquidity and it is burned in the process. Between the time you deposit
liquidity and when you reclaim it, you can freely use the LP token to transfer it to another wallet or deposit it in a yield farm to get additional rewards. In the future, you will be able to sell your LP tokens or leverage their value as collateral for borrowing money or other DeFi use-cases.

[comment]: # (mx-context-auto)

## What are Farms?

Farms generate yield for liquidity providers that stake their LP tokens. They are meant to incentivize long-term liquidity providing by enabling an additional revenue stream for providers. The rewards for farms are usually provided in xMEX tokens, but special farms with dual token rewards can exist.

Liquidity providers can use farms by staking the LP tokens obtained from providing liquidity in a pool. After doing this, xMEX rewards will periodically become available for harvesting.

[comment]: # (mx-context-auto)

## How to Use Farms?

You can deposit LP tokens in Farms to earn rewards by pressing the Stake button. For every token swap pair, a corresponding Farm is created. You can only stake TKN1/TKN2 LPT in the TKN1/TKN2 farm, for example. Farms yield xMEX rewards.

[comment]: # (mx-context-auto)

## How can I stake xMEX?

By simply holding xMEX in your wallet, you are already eligible for multiple simultaneous benefits, without the need to stake it as explained in the [utility section of the docs](https://docs.xexchange.com/mex-tokenomics/utility).

[comment]: # (mx-context-auto)

## How many MEX tokens are there?

The MEX supply for Year 1 after launch will be 8,045,920,000,000 MEX tokens. The MEX token has an issuance mechanism that is designed to accelerate the xExchange adoption. It is countered by a MEX burning mechanism. This will help counter-balance inflationary aspects of the system and should do so increasingly as adoption broadens (though we do not project or promise that the overall system will become deflationary).

More details on the MEX Tokenomics can be found in the docs and here:

- [https://xexchange.com/x-exchange-economics.pdf](https://xexchange.com/x-exchange-economics.pdf)

[comment]: # (mx-context-auto)

## What are the security funds used for?

Security is a top priority. A portion of the MEX supply has been set aside for funding periodic and exhaustive security audits, as well as future bounty programs, for all the xExchange components, from smart contracts to front-end components.

[comment]: # (mx-context-auto)

## What is Wrapped EGLD?

The xExchange Smart Contracts work with ESDT tokens. EGLD is the native coin of the MultiversX Network and needs to be wrapped as an ESDT token to work in xExchange.

Wrapped EGLD is used for each action that requires EGLD, such as swapping EGLD for another token, or depositing EGLD in a liquidity pool. The wrapping and unwrapping actions are automated by the interface.

[comment]: # (mx-context-auto)

## What is the purpose of the penalty for withdrawing a liquidity deposit too early?

This penalty is in place to encourage long-term liquidity providing and deter liquidity manipulation. The fee is small enough to enable flexibility for regular liquidity providers and large enough to defend against repeated deposits and withdrawals, which would have a negative impact on the stability of the liquidity pool.

Any action of depositing liquidity, such as adding more liquidity (consolidation) or staking rewards in the farm (compounding) resets the enter moment to the current epoch.

1 epoch = 24 hours. An epoch starts each day at ~15:30 UTC

[comment]: # (mx-context-auto)

## What is Impermanent Loss (IL)?

Providing liquidity can be profitable, but you’ll need to keep the concept of impermanent loss (IL) in mind. IL describes the temporary loss of funds occasionally experienced by liquidity providers because of volatility in a trading pair.

The bigger the volatility, the more you are exposed to IL as there is an irresistible opportunity for arbitrage, because the price in the LP doesn’t reflect what’s going on. In this case, the loss means less dollar value at the time of withdrawal than at the time of deposit. Impermanent loss is one of the fundamental concepts, it’s something that anyone who wants to provide liquidity to AMMs should understand.

[comment]: # (mx-context-auto)

## What are Analytics?

The Analytics button is reserved for the section that provides additional information about the exchange and its token pairs, such as price charts, volume charts, and other pieces of useful information for traders.

[comment]: # (mx-context-auto)

## Why do the rewards on the Dashboard in the “Charging Fees Rewards” keep changing all the time?

These rewards are accrued into **one big pool**. The pool constantly accumulates more rewards, but people are also joining the pool rewards and thus, the pool gets split among more and more people, which leads to the fluctuations shown on the website.

These fluctuations should become less frequent or significant, by the time most people have already migrated to xExchange and more rewards are accumulated in the pool.

The pool displays many various tokens because 0.05% of the swap fee for all swaps on the xExchange goes to the pool.

[comment]: # (mx-context-auto)

## What is energy? What can I do with it?

Energy is the new concept introduced with MEX 2.0. The more energy you have, the more rewards you will get.

To find out what rewards you can earn, head to the [utility page of the docs](docs.xexchange.com).

[comment]: # (mx-context-auto)

## How often do I have to claim the rewards?

You should claim the rewards shown in the dashboard, from Metabonding and boosted Farm rewards at least once per week for maximum efficiency and compounding effects or at a maximum of four weeks.

Important note: users will not be able to claim rewards older than four weeks.

Normal farm (base) rewards and Metastaking rewards can be accrued as long as you’d like.

[comment]: # (mx-context-auto)

## Can I earn multiple rewards at the same time?

Absolutely! You can, for example, create an LP token with EGLD and XMEX, then put that LP token into the EGLD/MEX farm and earn liquidity APR there, while at the same time, earn Metabonding rewards, the XMEX emission rewards, and the fees rewards.

[comment]: # (mx-context-auto)

## Why do I need to “update energy”?

You tell the smart contract how much energy you currently have by doing that transaction.

You only should do it when actively getting more Energy by either locking MEX for xMEX, claiming rewards, or lengthening the lock duration on your xMEX or when actively decreasing the energy you have by reducing the lock time or unlocking your xMEX.

Updating the energy won’t affect the lock time of your XMEX.

If you did any of these things mentioned above but did not update the energy, you will get fewer rewards or in the worst case, no rewards at all.

[comment]: # (mx-context-auto)

## What is the energy multiplier? Why is mine not at the maximum?

It’s just a simple graph that shows the energy you have versus the energy you **could have**.
It is based on all MEX, LKMEX and XMEX in your possession. If you’d lock everything to the max at the same time, your energy multiplier would show “4x”, which is the maximum.

[comment]: # (mx-context-auto)

## Can I farm normal unlocked MEX?

All farms produce xMEX rewards by default, but you can unlock those xMEX at any time and thus earn MEX as rewards for providing liquidity.
