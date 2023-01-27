---
sidebar_position: 2
---

# xMEX & Energy

## xMEX

xMEX is the time-locked equivalent of MEX. It has the same value, but for a certain period of time it can’t be bought, sold, or transferred.

All xExchange farm rewards and fees are distributed as xMEX locked for 4 years.

## Timelock

xMEX can be locked from any period ranging between 0 and 4 years, measured in days - more accurately, epochs: 24 hour intervals that begin and end around ~15:30 UTC each day.

xMEX can be unlocked either by waiting for the entire respective period, or at any time but with a penalty ranging from 0 to 80%.

i.e. 100,000 xMEX with 1 years time lock can be converted into 80,000 MEX.

## Energy

Any xMEX has attributed energy proportional to the locked period.

1 xMEX gives 1 Energy Point per day it is locked for.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/tokenomics/energy-periods.png" width="700" alt="Energy Periods" />
</div>

Example:

You own 100 xMEX, which are locked for 1 year (360 days).

You will start out with 100\*360 = 36000 Energy and after each day, you will have 100 less Energy.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/tokenomics/energy-formula.png" width="340" alt="Energy Formula" />
</div>

The amount of an account’s Energy determines the rate of rewards for participating in xExchange.

Simply put, more energy means more rewards:

- higher APR for farms
- bigger portion of xExchange fees
- Metabonding rewards
- other perks

Each day, as the xMEX gets closer to it’s unlock day, it will lose 1 point.

However, losing energy does not mean you lose your tokens. Your tokens stay the same. You lose energy because your tokens are nearing their unlock date.

For a more in-depth look into the Energy system, check out the [xExchange Whitepaper](https://xexchange.com/x-exchange-economics.pdf).
