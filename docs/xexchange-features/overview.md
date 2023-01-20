---
sidebar_position: 1
id: overview
---

# Overview

The xExchange is an evolved Automated Market Maker (AMM) Decentralized Exchange (DEX). It rearchitects key elements of the DEX AMM concept to build a product that can leverage the entire performance of the MultiversX architecture. The goal is to offer global, near-instant, inexpensive transactions among an expanding suite of assets.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/features/features-overview.png"  alt="Features Overview" />
</div>

The xExchange DEX will feature an Automated Market Maker (AMM) application, enabling seamless P2P exchange (actually a peer-to-contract: P2C) of native tokens without the need of maintaining an order book.

You could think of an Automated Market Maker as a bot that’s always willing to quote you a price between two assets. These swaps instantaneously happen against assets that are pooled to provide liquidity. You can also provide liquidity in these pools and be rewarded based on their utilization. This allows essentially anyone to become a market maker on an exchange and earn fees for providing liquidity.

An AMM relies on a mathematical formula to price assets. Instead of using an order book like a traditional exchange, assets are priced according to a pricing algorithm.

This formula can vary with each protocol. For example, xExchange DEX uses the industry standard "x\*y=k" constant product AMM model, which has proven its reliability in existing implementations, and has been [formally modelled and verified](https://github.com/runtimeverification/verified-smart-contracts/blob/master/uniswap/README.md). In this formula, k is a fixed constant, meaning the pool’s total liquidity always has to remain the same.

<div style={{ textAlign: 'center' }}>
    <img src="/docs/features/features-chart.png" width="700" alt="Features Chart" />
</div>

The performance of existing AMM platforms could be significantly improved by rebuilding them on vastly more scalable architectures. By reimagining an Automated Market Maker on top of a highly scalable architecture that is high bandwidth, low latency, and inexpensive, the performance of the swap processes can be drastically improved.

With significantly better performance, the scope of AMMs can be rapidly expanded, giving birth to new market opportunities. Perhaps the most important growth vector we will see will come when intuitive simplicity and ease of use will enable tens of millions, hundreds of millions, and eventually billions of people to interact with these new technologies, facilitating simple and instant exchange, at scale.
