---
sidebar_position: 2
id: swaps
---

# Swaps

Users can trade or swap an amount of tokens for an automated computed amount from the second token. The Automated Market Making concept relies on a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm.

xExchange uses the Uniswap-like constant product formula x \* y = k, where x is the amount of one token in the liquidity pool, and y is the amount of the other. In this formula, k is a fixed constant, meaning the pool’s total liquidity always has to remain the same.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/features/swaps.png" alt="Swaps" width="570" />
</div>

There is a **0.3%** fee for swapping tokens. A part of this fee, 0.2% is split by liquidity providers proportional to their contribution to liquidity reserves. The contract will buy-back and burn MEX from the EGLD/MEX pool using 0.05% and the remaining 0.05% are split amongst all wallets with energy.

To learn more about the energy system of xExchange, [read this](https://xexchange.com/x-exchange-economics.pdf).
