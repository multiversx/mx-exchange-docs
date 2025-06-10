---
sidebar_position: 2
id: trade
sidebar_label: 🔄 Trade
title: Trade
---

[comment]: # "mx-context-auto"

<img src="/docs/features/exchange-header.webp" alt="xExchange Exchange" />

:::info
xExchange is an Automated Market Maker (AMM) decentralized exchange at the core of the MultiversX ecosystem. As the leading AMM on the network, xExchange stands as the most trusted and widely used decentralized exchange, delivering an unmatched trading experiences.
:::

## Token Swaps

Users can trade or swap an amount of token 1 for an automated computed amount from the token 2. The Automated Market Making concept relies on a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm.

xExchange uses the Uniswap-like constant product formula x \* y = k, where x is the amount of token 1 in the liquidity pool, and y is the amount of token 2. In this formula, k is a fixed constant, meaning the pool’s total liquidity must always remain the same.

:::tip
Swapping tokens incurs a **0.3%** fee.

As part of that fee:

- **0.2%** goes to liquidity providers based on their share of the liquidity pool.

- **0.05%** is used to buy back and burn MEX from the EGLD/MEX pool.

- The final **0.05%** is distributed to all accounts with [Energy](/xmex-and-energy/what-is-energy.md).
  :::

To learn more about the energy system of xExchange, you can read the [xExchange Economics Paper](https://xexchange.com/x-exchange-economics.pdf).
