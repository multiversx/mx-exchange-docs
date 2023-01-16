---
sidebar_position: 2
---

# Router Smart Contract

The Router Smart Contract supports the basic functionalities performed for interacting with the Pair Smart Contracts. For better modularity, a Factory Module is added to hold the underlying logic that handles the Pair Smart Contracts.

The Router SC provides access to the Factory Module through a series of endpoints and view functions. Notably here are the createPair and upgradePair endpoints. The first one will be used to create a new Pair Smart Contract when there is no address associated with the two tokens intended to be used for the DEX activity. This endpoint is used only once per Pair creation. The latter endpoint will be used when a new version of a Pair Smart Contract will be developed and there will be a need to upgrade a Pair SC implementation. The usage of this endpoint is per Pair SC and can be used multiple times to upgrade multiple Pair Smart Contracts.

Router SC provides a series of view functions which will be used extensively on the DEX frontend. The getPair and getAllPairs view functions are of interest. The getPair function will get the associated Pair SC address for a pair of two tokens. Given the map-like implementation of the Factory Module storage that keeps the association between the tokens and Pair SC address, the order of the two tokens does not matter since the Factory Module exposes the same address.

Besides the above mentioned functionality for the Factory Module, the two most important aspects for this are the ability to create Pair Smart Contract and upgrade a Pair Smart Contract. As described above, the Router SC is an interface between the user and the Factory Module. Deploying a new Pair SC results in a new address provided by the metachain for two associated tokens. The address is added to the Factory Module storage and can be queried by the user. Performing this action requires the need for the Pair SC bytecode.

The Router Smart Contract will also call several functions to issue and set roles for the ESDT tokens given by the Pair Smart Contract:

1. Issue ESDT token - will issue a new ESDT token for the given Pair contract
2. SetLocalRoles - set local burn and local mint roles for the given Pair contract - this gives the possibility for the Pair contract to be able to mint and burn tokens locally.
