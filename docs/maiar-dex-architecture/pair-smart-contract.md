---
sidebar_position: 3
---

# Pair Smart Contract

The Pair Smart Contract consists of two main functionalities. The first one represents the liquidity pools associated with the two tokens that compose the second functionality, the swap activity. 

## Liquidity Pools

Because of the way a DEX is constructed, each Pair SC keeps two pools for each of the tokens that can be swapped between them based on an Automated Market Maker formula. Pair SC provides an endpoint to the user that is used to add liquidity into the pools as well as an endpoint to remove the liquidity added. Adding tokens into the liquidity pools is not a trivial task for the blockchain implementation and it would require multiple calls to the same endpoint accepting the tokens. The Pair exposes an acceptPayment endpoint which verifies if the tokens that are sent correspond to the ones that the Pair SC accepts. If the tokens do not match Pair SC implementation will send them back to the user and the process to add liquidity would fail. 

Upon accepting the two token amounts, the user has to perform the actual add liquidity operation by calling the addLiquidity endpoint from the Pair SC. The Elrond DEX computes the exact amounts needed from the amounts sent by the user and based on the existing reserves as well as keeping the constant invariant from x * y = k formula unchanged. The unnecessary left amounts will then be sent back to the user. Elrond DEX takes the concept of liquidity provider token (LP token) and goes a step further. For each Pair SC, when a liquidity provider adds his contribution to the pools, the Pair SC mints a specific LP Token equal in amount with the liquidity added by the LP and sends it to LP’s wallet. Anyone who possesses these tokens can claim their liquidity possession back. These tokens are issued in the ESDT format. Using these types of tokens we can simply anonymize the users as well, as in the pair contract there will be no evidence between the user and the provided liquidity. This makes the contracts easier as well. When the user sends these LP tokens to the Pair contract to reclaim his position, the LP tokens will be burnt.

The proposed architecture for the add liquidity process imposes the need of 3 separate calls to the Pair SC: two separate calls are needed to transfer the tokens from LP’s wallet to Pair SC; one call is needed to instruct the Pair SC that liquidity is added. The implementation of the Pair SC takes into consideration the extreme case when one of the two token transfer calls fails and the LP ends up with only one token amount being sent to Pair SC. An endpoint is added that can be used by LP to recall the unstaked token amount. A temporary storage is held for every LP until the add liquidity endpoint ends with success so that the LP can recall his tokens back at any time.

Removing the tokens from liquidity pools is done through a single payable endpoint that accepts only LP tokens specific to the Pair SC from which the LP withdraws his funds. Upon sending the LP tokens back to the Pair SC, it will compute the added liquidity for each token based on the amount of LP token sent, it will send the computed token amounts back to LP’s wallet and will perform a burn operation from the amount of LP token sent.

When the user enters in the liquidity pool by calling addLiquidity the pair calculates the percentage of this entrance out of the total tokens existing in the liquidity pool using the x * y = k formula. For the computed percentage, the user is given LP Tokens for the selected pair. These LP Tokens are a must in order to get your liquidity position back, to get rewards. When a liquidity provider “takes rewards” - (accumulated fees from the trades) he actually burns a set of LP Tokens and receives an amount of tokens A & B, which is computed according to the LP tokens amount. Computation will be done according to the percentage of the currently burnt LP Tokens as a percentage of the liquidity pool. This is the same formula as when the user entered the pool. However, as there were various swaps in the pool and there were accumulated fees out of these swaps, when the liquidity provider will get out of his position he will receive more tokens than he initially deposited. More details can be found in the Fees and rewards paragraph. The same number of LP Tokens will ideally represent a greater amount of tokens than initially deposited, because of the accumulated fees.


## Swap Process

Pairs directly check whether the invariant was satisfied (accounting for fees) after every trade. This means that rather than relying on a pricing function to also enforce the invariant, pair smart contracts simply and transparently ensure their own safety, a nice separation of concerns. One downstream benefit is that pairs will more naturally support other flavors of trades which may emerge (e.g. trading to a specific price at execution time).

To prevent front running attacks, it’s vital to submit swaps that have access to knowledge about the “fair” price their swap should execute at. In other words, swaps need access to an oracle, to be sure that the best execution they can get from the SWAP is close enough to what the oracle considers the “true” price. While this may sound complicated, the oracle can be as simple as an off-chain observation of the current market price of a pair. Because of arbitrage, it’s typically the case that the ratio of the intra-block reserves of a pair is close to the “true” market price. So, if a user submits a trade with this knowledge in mind, they can ensure that the losses due to front-running are tightly bound. The frontend should ensure trade safety. It calculates the optimal input/output amounts given observed intra-block prices, and uses the router to perform the swap, which guarantees the swap will execute at a rate no less  x% worse than the observed intra-block rate, where x is a user-specified slippage tolerance (0.5% by default).

We should offer 3 types of swaps: exact input in exchange for maximum output. Exact output in exchange for minimum input. Swap to exact price. (with slippage/tolerance)

In a future version we can implement a new version of pair contract following the next paper: As part of the market state, the Pair SC maintains two sets of “virtual quantities”: the A-side (x, y) and the B-side (x, y). Trades of B for A affect the A-side values only and trades of A for B affect the B-side values only. More details can be found at the following link: 
 [https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281)

## Fees and rewards for liquidity providers

There is a 0.3% fee for swapping tokens. This fee is split by liquidity providers proportional to their contribution to liquidity reserves. This is done via the following algorithm: whenever someone trades on the exchange, the trader pays a 0.3% fee, part of this is added to the liquidity pool. Since no new liquidity tokens are minted, this has the effect of splitting the transaction fee proportionally between all existing liquidity providers.

The Maiar DEX economics model will be as follows: 0.3% will be the basic fee, from which 0.25% goes to the liquidity providers, and the contract will buy MEX from the EGLD/MEX pool using the remaining 0.05% and burn it.

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool. Fees are collected by burning liquidity tokens to remove a proportional share of the underlying reserves. Since fees are added to liquidity pools, the invariant increases at the end of every trade. Within a single transaction, the invariant represents token0_pool * token1_pool at the end of the previous transaction. Thus the constant K is changed by the returning fees as well.

The fees and rewards are taken only when the liquidity provider returns the given liquidity pool tokens. Thus, when the liquidity provider wants to get some of the rewards, he will actually release a set of LP tokens and get the computed Tokens A and Tokens B as rewards.

The MEX token, the governance token for Maiar DEX and other Elrond DeFi projects, will also be used to incentivize farms with a constant payout.
