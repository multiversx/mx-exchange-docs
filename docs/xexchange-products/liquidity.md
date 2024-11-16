---
sidebar_position: 3
id: liquidity
sidebar_label: 🌊 Liquidity Pools
title: Liquidity Pools
---

[comment]: # (mx-context-auto)
<img src="/docs/features/pools-header_1x.webp" alt="xExchange Liquidity Pools" />

:::info
Liquidity pools emerged as an innovative and automated way of solving the liquidity challenge on DEXs. They replace the traditional order book model used by centralized crypto exchanges by using Automated Market Makers (AMM).
:::

## How it works
Liquidity providers are incentivized for their contribution with rewards. When they make a deposit, they receive a new token representing their stake, called a liquidity pool token or LP token.

The share of trading fees paid by users who use the pool to swap tokens is distributed automatically to all liquidity providers, proportional to their stake size. There is a **0.3%** fee for swapping tokens.

The xExchange economics model is as follows:

Swapping tokens incurs a **0.3%** fee. As part of that fee:
- **0.2%** goes to liquidity providers based on their share of the liquidity pool.

- **0.05%** is used to buy back and burn MEX from the EGLD/MEX pool.

- The final **0.05%** is distributed to all accounts with [Energy](/xmex-and-energy/what-is-energy.md).

The 0.2% fee is shared among liquidity providers based on their stake. Here’s how it works: when a trade occurs, a 0.3% fee is charged, with 0.2% added directly to the liquidity pool. Since no new liquidity tokens are minted, this effectively distributes the fee among existing liquidity providers proportionally.

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool.

On xExchange, Liquidity Pool (LP) tokens can be staked in [dedicated farms](/xexchange-products/yield-farming.md) for each pool, earning additional rewards in xMEX tokens.

A liquidity provider earns rewards from two sources: trading fees from the liquidity pool and xMEX rewards for staking LP tokens in a farm.

Additionally, they can opt into a third stream through [Dual Farms](/xexchange-products/dual-farms.md) for even more rewards.

:::tip
The LP token is essential—you’ll need it to withdraw your stake from the liquidity pool.
:::

[comment]: # (mx-context-auto)

## What is Impermanent loss?

Providing liquidity can be profitable, but you’ll need to keep the concept of impermanent loss (IL) in mind. IL describes the temporary loss of funds occasionally experienced by liquidity providers because of volatility in a trading pair.

The bigger the volatility, the more you are exposed to IL as there is an irresistible opportunity for arbitrage, because the price in the LP doesn’t reflect what’s going on. In this case, the loss means less dollar value at the time of withdrawal than at the time of deposit. Impermanent loss is one of the fundamental concepts, it’s something that anyone who wants to provide liquidity to AMMs should understand.

Let’s assume you provide 50 EGLD and 5000 USDC as liquidity (which suggests the EGLD price is at 100 USDC). In the case of i.e. EGLD price increase, converting your LP token back into liquidity will result in less EGLD tokens and more USDC.

Example:

- Starting point: EGLD $100, USDC $1
- Future point: EGLD $150, USDC $1

When providing liquidity at the starting point as 50 EGLD and 5000 USDC:

- Value at future point if held: $12,500.00 → 50 EGLD and 5000 USDC (hodl)
- Value at future point if providing liquidity: $12,247.4 → 40.8 EGLD and 6123.7 USDC (in liquidity pool)
- Impermanent loss: 2.02%

Consider the potential returns while providing liquidity (from swaps, farm rewards, staking rewards) versus the potential impermanent loss to take an informed risk decision.
