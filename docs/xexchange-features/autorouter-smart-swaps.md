---
sidebar_position: 7
id: autorouter-smartswaps
---

[comment]: # (mx-context-auto)

# Autorouter / Smart Swaps

xExchange offers an innovative Smart Swaps feature, that allows swaps from any listed token to any listed token.

The Autorouter automatically routes trades between available pairs. You can thus swap between any two tokens, even if they are not directly paired.

For example, you can buy UTK directly with USDC.

The Autorouter will use your USDC amount to buy EGLD, and then immediately use the resulting EGLD to buy UTK. As a result, you swap USDC to UTK in a single efficient operation, instead of multiple manual ones.

You can see the chosen swap route on the bottom of the swap page by clicking on “More details”.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/features/smart-swaps.png" width="525" alt="Smart Swaps" />
</div>

The example above illustrated a trade going over just two hops, for simplicity. However, the Autorouter is capable of determining the most efficient swap path over multiple hops.
