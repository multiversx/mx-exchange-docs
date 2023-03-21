---
sidebar_position: 3
id: liquidity
---

[comment]: # (mx-context-auto)

# Liquidity

The liquidity pools emerged as an innovative and automated way of solving the liquidity challenge on DEXs. They replace the traditional order book model used by centralized crypto exchanges by using Automated Market Makers (AMM).

<div style={{ textAlign: 'center' }}>
    <img src="/docs/features/liquidity.png" width="580" alt="Liquidity" />
</div>

Liquidity providers are incentivized for their contribution with rewards. When they make a deposit, they receive a new token representing their stake, called a liquidity pool token or LP token.

The share of trading fees paid by users who use the pool to swap tokens is distributed automatically to all liquidity providers, proportional to their stake size. There is a **0.3%** fee for swapping tokens.

The xExchange economics model will be as follows: 0.3% will be the basic fee, from which 0.2% goes to the liquidity providers, with 0.05% the contract will buy MEX from the EGLD/MEX pool and burn it and the remaining 0.05% will be distributed among all users with energy.

This 0.2% fee is split by liquidity providers proportional to their contribution to liquidity reserves. This is done via the following algorithm: whenever someone trades on the exchange, the trader pays a 0.3% fee and 0.2% is added to the liquidity pool. Since no new liquidity tokens are minted, this has the effect of splitting the transaction fee proportionally between all existing
liquidity providers.

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool.

On xExchange, LP tokens can also be staked in a farm specific to each liquidity pool so that even more rewards are earned in the form of xMEX tokens.

Thus, a liquidity provider will earn rewards from 2 streams: the fees from the LP and xMEX for
staking the LP token in a staking pool.

However, a liquidity provider may also opt-in to earning rewards from a third revenue stream: Metastaking.

Keep in mind that the LP token is very important. In order to withdraw the stake in the liquidity pool you need to provide the LP token.

[comment]: # (mx-context-auto)

### Impermanent loss

Providing liquidity can be profitable, but you’ll need to keep the concept of impermanent loss (IL) in mind. IL describes the temporary loss of funds occasionally experienced by liquidity providers because of volatility in a trading pair.

The bigger the volatility, the more you are exposed to IL as there is an irresistible opportunity for arbitrage, because the price in the LP doesn’t reflect what’s going on. In this case, the loss means less dollar value at the time of withdrawal than at the time of deposit. Impermanent loss is one of the fundamental concepts, it’s something that anyone who wants to provide liquidity to AMMs should understand.

Let’s assume you provide 50 EGLD and 5000 USDC as liquidity (which suggests the EGLD price is at 100 USDC). In the case of i.e. EGLD price increase, converting your LP token back into liquidity will result in less EGLD tokens and more USDC.

Example:

- Starting point: EGLD $100, USDC $1
- Future point: EGLD $150, USDC $1

When providing liquidity at the starting point as 50 EGLD and 5000 USDC:

- Value at future point if held: $1,250.00 → 50 EGLD and 5000 USDC (hodl)
- Value at future point if providing liquidity: $1,224.74 → 40.8 EGLD and 6123.7 USDC (in liquidity pool)
- Impermanent loss: 2.02%

Consider the potential returns while providing liquidity (from swaps, farm rewards, staking rewards) versus the potential impermanent loss to take an informed risk decision.
