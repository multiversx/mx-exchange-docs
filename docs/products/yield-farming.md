---
sidebar_position: 4
id: farms
sidebar_label: 🚜 Yield Farming
title: Yield Farming
---

[comment]: # "mx-context-auto"

<img src="/docs/features/farms-header_1x.webp" alt="xExchange Yield Farming" />

:::info
Farms generate yield for liquidity providers that stake the LP tokens. They are meant to incentivize long-term liquidity providing by offering an additional revenue stream for providers.
:::

The rewards for farms are usually provided in [xMEX](/xmex-and-energy/xmex) tokens, but special farms with dual token rewards called [Dual Farms](/products/dual-farms) also exist.

Liquidity providers can use farms by staking the LP tokens obtained from providing liquidity in a pool. After doing this, xMEX rewards will periodically become available for harvesting.

[comment]: # "mx-context-auto"

## Energy Rewards

Each Farm has base rewards and energy rewards. While base rewards are paid out equally to everyone, based on their share of the farm (APR is shown for each farm), energy rewards are paid out not only based on your share of the liquidity of the farm, but also on your share of the energy of the farm.

From all emissions that go towards a farm, **40%** go to base rewards while **60%** go towards the energy rewards, to reward those with energy.

The APR of the energy rewards (`eAPR`) is given by the following formula:

<div style={{ textAlign: 'center' }}>
    eAPR = BaseAPR * BoostFactor * min(u, (YourEnergy/TotalEnergy) / (YourLP/TotalLP))
</div>

where `YourLP` is your amount of LP in the farm, `TotalLP` the total amount of LP in the farm, `YourEnergy` your energy, `TotalEnergy` the total energy in the farm, `BoostFactor = 60%/40% = 1.5` and `u = 2`.

Energy rewards aren’t immediately visible. They become visible at the end of each rewards period (every Friday, at epoch change). You can find a countdown to the end of each rewards period in the right side menu.

After they become visible, you can claim them.

Note*: If you withdraw your liquidity before the end of the rewards period, you will not receive energy rewards.*

To learn more about energy rewards, check out the [xExchange Whitepaper](https://xexchange.com/x-exchange-economics.pdf).

### Early Withdrawal

Farms have an early-withdrawal penalty. After depositing into a farm, you will notice that withdrawing will result in a 1% penalty. If you wait out the time shown, you will not have to pay a fee. This is to disincentivize playing with liquidity and ensure a stable amount of liquidity at all times.
