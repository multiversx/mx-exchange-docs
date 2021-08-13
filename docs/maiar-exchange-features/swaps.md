---
sidebar_position: 2
---

# Swaps

Users can trade or swap an amount of tokens for an automated computed amount from the second token. The Automated Market Making concept relies on a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm. Maiar DEX uses the Uniswap-like constant product formula x \* y = k, where x is the amount of one token in the liquidity pool, and y is the amount of the other. In this formula, k is a fixed constant, meaning the pool’s total liquidity always has to remain the same.

<div style={{textAlign: 'center'}}>

![img](/docs/token-swaps.png)

</div>

There is a **0.3%** fee for swapping tokens. A part of this fee, 0.25% is split by liquidity providers proportional to their contribution to liquidity reserves. The contract will buy MEX from the EGLD/MEX pool using the remaining 0.05% and burn it.
