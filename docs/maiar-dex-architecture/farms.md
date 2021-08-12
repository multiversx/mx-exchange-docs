---
sidebar_position: 4
---

# Farms

The liquidity pool tokens will be usable in the farming contracts. These users will be able to deposit their LP_ESDTs and will receive Semi Fungible tokens which will represent their farming position. These farms will earn extra yield for these users.

**There will be ONE farm PER each liquidity token (LP_EGLD_MEX, LP_EGLD_BUSD) and one farm where users can enter with MEX.**

The process of staking and claiming rewards would be the following for those who **stake LP Tokens**:

1. The user enters as a liquidity provider in any **MEX/otherPair** swap pool and will get **LP-Token-MEX-PairX**. These LP tokens represent the user's position in the pool. If the user wants to claim some of his tokens back or the accumulated fees he must return the LP tokens and will receive the real tokens according to those.
2. The user takes the **LP-Token-MEX-PairX** token and will stake it into the **Elrond-Farm-MEX-PairX SC**.
3. In order to take advantage of tokenization even in the **Elrond-Farm-MEX-PairX SC** the staking position is represented by a **Farm Token**. The rewards are in the form of the **MEX** tokens received from the **swap fees (TBD)** and from **PER BLOCK MINTED MEX**.
4. **The Farm tokens** will be actually different for every **Pair contract** in order to know what kind of LP-Tokens has to be returned when the user gets out. **The differentiation** can be done through issuing different **NFT** tokens.
5. The process of claiming rewards is straightforward. The user has to give his position to the Farm SC and he will receive MEX rewards + a newly created NFT which is identical to the one given, the only difference is that it will have it’s reward counter reset.
6. When getting out of the **FARM SC** the user will return some of the **Farm Tokens** and as we compute how much those tokens are valued, he will get it back as **LP-Tokens of the given pool, plus he will get the rewards from the accumulated MEX fees.**

The process of staking and claiming rewards for those who **stake MEX tokens** will be similar, with only a few differences:

1. The token staked will be MEX. So when entering the Mex Farm SC, a user has to stake their MEX.
2. The rewards are only in the form of Per Block Minted MEX.
3. There is only an SFT that represents the position in this Farm SC, because there’s only a Mex Farm SC.

The idea is to maintain a MexPerShare accumulator. At each block, we compute the aggregated rewards (fees + generated) and the MexPerShare accumulator is increased with that amount divided by the total amount of **Farm Tokens**. When entering a Farm, an SFT is created that will contain in its attributes the current MexPerShare ratio. When exiting a Farm, the amount of reward that he will receive is the current MexPerShare - the attributes recorded MexPerShare multiplied by the amount of input Farm Token. This way, a user will get exactly his share of the aggregated reward amount that was gathered between the time that he entered and the time he exited.

**If one user enters the farm and wants to get out of it within 3 epochs, he will receive a 1% penalty from his liquidity. When a user consolidates (reenters farm), compounds or merges positions, the enter moment will be reset to the current epoch. Thus the penalty will apply in the next 3 epochs if the user will exitFarm.**

## Locking the rewards for a long period of time

MEX rewards can come from 3 pools: EGLD/MEX farm, EGLD/BUSD farm and MEX farm. if you choose to lock the rewards (optionally) you will receive **double APR**.

Locking rewards is easy, we enhance the experience further by enabling the locked rewards to be used for further farming or liquidity providing. So we will make the whole system in a few steps. The locking period is as follows: you will receive 16.66% per month after one year. So in the first year there will be no unlocking, and after this, it gradually unlocks after each month.

We introduce this OPTION in the farm smart contracts. When a user selects the OPTION to lock the rewards that he will receive in the next period, the number of tokens to be considered to compute the rewards will be double of the current amount and the TOTAL LIQUIDITY in the farming pool will be increased with the newly computed tokens (double of the inputted amount).

Once the user enters the farming pool and selects the option to lock, this option will be written in the received semi fungible tokens. All the computation for everyone else works the same only that they will receive a somewhat smaller amount of rewards as they have a smaller percentage of the given liquidity in the farming pool (as the user who locked the rewards entered with double the amount of liquidity).

The system will go as expected, the only change will be when the user calls claimRewards. If the user has an SFT without the lock option, he will receive the actual rewards in MEX tokens and a new SFT with his position.

In case the user does claimRewards with an SFT with the lock option, the user will receive LOCKED MEX Tokens: LKMEX (an NFT where the locking period is clearly written - it is taken from the SFT) and will get the newly computed SFT back.

The LOCKED MEX tokens can be used in the **LOCK MEX PROXY CONTRACT** to further farm or to provide liquidity. This contract has the capability of **unlockTokens, only one contract for easier reasoning**. One user sends the LOCKED MEX tokens to the Locked-Asset-Factory contract and calls unlockTokens function. The proxy contract will evaluate the NFT and send the real MEX tokens plus the newly created LOCKED MEX tokens to the user.

Through the lock mex proxy contract users can use the locked MEX to enter liquidity pools as well, and to use the liquidity position with locked tokens to enter into the farms. The positions from the proxy contracts are semi fungible tokens as well, thus by default are transferable.

**Each month (every 30 epochs) a new Locked MEX (LKMEX) is created that will start to be unlocked after 1 year (16.66% per month for the next 6 months).**

This means there are multiple Locked MEX tokens, each with different unlock schedules. There can be Locked MEX #10 which unlock in October 2022, and Locked MEX 12 which unlock in December 2022. Locked MEX #10 and Locked MEX #12 will always have the same value as the spot value of MEX, but they will be gradually unlocked according to the schedule.

## Positions Consolidation

As stated above, each Farm will provide a new Semi Fungible Token each time users will stake the liquidity pool tokens into a farm. Because of the nature of the SFTs, the new position would not automatically add on the already existing position and the user would end up with a long list of SFTs tokens.

A consolidation mechanism is used to merge these positions and provide a new Semi Fungible Token that holds all the consolidated tokens from the same farm. The mechanism consists of a series of transactions that will deposit the tokens desired to be consolidated and a last transaction which would do the actual merging resulting with transferring the newly created SFT back to the user. Taking into account that all the computations would be done inside each farm Smart Contract, in a single transaction for token merging, a limit of SFTs had to be enforced so that the consolidation transaction did not exceed the maximum gas limit imposed by a block. The default maximum of consolidated SFTs is set to **10**.

The consolidation mechanism comes with a set of rules that have to be followed in order to make sure the token merging can be done. Different rules apply to each type of farm tokens, Locked Farm tokens, Locked liquidity pool tokens and Locked MEX tokens. Farm tokens must have the same type of locked rewards option and the same APR multiplier. Same rule applies to Locked Farm token merging as well. Merging Locked MEX token does not come with breaking rules but will generate a new Locked MEX SFT with a new set of unlocking milestones that takes into consideration the unlocking schedule of each consolidated token. Locked liquidity pool tokens do not have enforcement mechanisms for merging, besides the one imposed by the Proxy Smart Contract.

The Proxy SC will take care of merging both the Locked Farm tokens and Locked liquidity pool tokens. The same deposit storage is used for consolidating the two different tokens. Thus, this smart contract imposes the rule to have the same type of token when the merging transaction is executed. One can not merge as well Locked liquidity tokens or Locked Farm tokens from different pools / farms.

## Compounding Rewards

Having the compounding mechanism available for Farm tokens provided us the opportunity to also create a direct compounding rewards implementation that only applies to the MEX to MEX farm. The compounding rewards mechanism works in a way that the user would not need to claim the rewards first and then reinvest them into the same farm, but instead, a new endpoint was added that would do the 2 transactions into a single one. The enforcement here is that the farming token and rewards have to be the same.
