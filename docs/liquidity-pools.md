---
sidebar_position: 3
---

# Liquidity Pools

The liquidity pools emerged as an innovative and automated way of solving the liquidity challenge on DEXs. They replace the traditional order book model used by centralized crypto exchanges by using Automated Market Makers (AMM).

Liquidity providers are incentivized for their contribution with rewards. When they make a deposit, they receive a new token representing their stake, called a liquidity pool token or LP token.

The share of trading fees paid by users who use the pool to swap tokens is distributed automatically to all liquidity providers proportionate to their stake size. There is a **0.3%** fee for swapping tokens. The Maiar DEX economics model will be as follows: 0.3% will be the basic fee, from which 0.25% goes to the liquidity providers, and for the remaining 0.05% the contract will buy MEX from the eGLD/MEX pool and burn it.

This 0.25% fee is split by liquidity providers proportional to their contribution to liquidity reserves. This is done via the following algorithm: whenever someone trades on the exchange, the trader pays a 0.3% fee and 0.25% is added to the liquidity pool. Since no new liquidity tokens are minted, this has the effect of splitting the transaction fee proportionally between all existing liquidity providers.

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool.

On Maiar DEX, LP tokens can be also staked in a staking pool specific to each liquidity pool so that even more rewards are earned in the form of MEX token.

Thus, a liquidity provider will earn rewards from 2 streams: the fees from the LP and MEX for staking the LP token in a staking pool.

Keep in mind that the LP token is very important. In order to withdraw the stake in the liquidity pool you need to provide the LP token.
