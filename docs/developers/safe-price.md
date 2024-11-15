---
sidebar_position: 2
id: safe-price
---

[comment]: # (mx-exclude-context)

Excerpt from contract's github specs [here](https://github.com/multiversx/mx-exchange-sc/tree/main/dex/pair#safe-price-v2). Check the repo documentation for latest up to date overview.

# Safe Price V2

All MultiversX liquidity pool contracts offer access to on-chain historical price and liquidity data, acting up as oracles that open up a wide range of on-chain use cases.

## General overview

The new safe price mechanism is an updated module of the __Pair SC__, designed to stabilize prices over a number of rounds, creating a smoother, more predictable pricing pattern in the __xExchange__ liquidity pools. The mechanism achieves this by storing accumulated reserves over time, with each recorded round representing a snapshot of token reserves at that point in time. This collection of reserve data is then processed through a variety of algorithms to compute and retrieve the safe price. Notably, the mechanism operates through a central view factory contract, which manages requests for all active smart contract pairs. The view factory contract accepts the address of the desired pair as a parameter in its view functions, simplifying the process of querying for data.

:::note Important
The Safe Price module retrieves data independently of the liquidity pool's state. As such, even if a pair smart contract is paused, the safe price module will continue to return data. If an external contract requires more control or context concerning the data, it needs to first check the liquidity pool's status manually and subsequently utilize the safe price data according to its needs.
:::

## Deployed Safe Price View Factories

| Environment | Safe Price view factory smart contract address |
|-------------|------------------------------------------------|
| Mainnet: | `erd1qqqqqqqqqqqqqpgqtce4z8zzz76xjht3hak0hseshcmj3ush2jps2exxjn` |
| Devnet: | `erd1qqqqqqqqqqqqqpgqcmnum66jxyfpcnvqk5eahj5n3ny4vkfn0n4szjjskv` |
| Testnet: | `erd1qqqqqqqqqqqqqpgqmdfdr9xp5glax4fcyxcf6j3wthufdrtrexkscfgj4p` |

## Features

- __Accumulated Reserves:__ The mechanism consistently stores the accumulated reserves over time. Each round in which the liquidity pool contract is used creates a snapshot of the token reserves for that time, with the weight of a __PriceObservation__ for a round being the difference between the last saved round and the current one.
- __Price Observations:__ Each round's reserves, once calculated and stored, are then saved in a __PriceObservation__ struct for the subsequent round (n+1). This allows for a clear record of price changes and liquidity over time.
- __Circular List Storage and Binary Search:__ Price observations are stored in a circular list, which is an efficient data structure for storing the rolling price data. A binary search algorithm is used to find specific __PriceObservations__ in this list.
- __Linear Interpolation:__ If a price observation is not available for a queried round, the algorithm will perform a linear interpolation between the nearest price observations to estimate the price for that round.
- __Error Handling:__ To maintain data integrity, a query for a price observation older than the oldest stored observation will result in a SC error. This mechanism helps to prevent the use of outdated or non-existent data.
- __Versatile Safe Price Request Inputs:__ The mechanism offers several view functions, each providing a different way to query the safe price. These views give users flexibility in querying the safe price by either providing all necessary parameters or using default ones. 

## Endpoints available on the View factory contract

### getSafePrice

```rust
    #[view(getSafePrice)]
    fn get_safe_price(
        &self,
        pair_address: ManagedAddress,
        start_round: Round,
        end_round: Round,
        input_payment: EsdtTokenPayment,
    ) -> EsdtTokenPayment
```

This function allows you to retrieve the safe price by specifying the pair address, start round, end round, and input payment. 
It returns the corresponding output payment computed at the safe price.

### getSafePriceByRoundOffset

```rust
    #[view(getSafePriceByRoundOffset)]
    fn get_safe_price_by_round_offset(
        &self,
        pair_address: ManagedAddress,
        round_offset: u64,
        input_payment: EsdtTokenPayment,
    ) -> EsdtTokenPayment
```

This function allows you to retrieve the safe price by specifying the pair address, round offset, and input payment. It calls the generic __getSafePrice__ endpoint, by automatically computing the end_round parameter as the current block round, and the start_round as the difference between the current_round and the provided round_offset.
It returns the corresponding output payment computed at the safe price.

### getSafePriceByDefaultOffset

```rust
    #[view(getSafePriceByDefaultOffset)]
    fn get_safe_price_by_default_offset(
        &self,
        pair_address: ManagedAddress,
        input_payment: EsdtTokenPayment,
    ) -> EsdtTokenPayment
```

This function allows you to retrieve the safe price by specifying the pair address and input payment. It works in the same way as __getSafePriceByRoundOffset__ endpoint, but instead of using a provided round_offset parameter, it uses a default one, which at this moment is set to 600 rounds (which translates in an one hour window).
It returns the corresponding output payment computed at the safe price.

### getSafePriceByTimestampOffset

```rust
    #[view(getSafePriceByTimestampOffset)]
    fn get_safe_price_by_timestamp_offset(
        &self,
        pair_address: ManagedAddress,
        timestamp_offset: u64,
        input_payment: EsdtTokenPayment,
    ) -> EsdtTokenPayment
```

A more specific view function, it allows you to retrieve the safe price by specifying the pair address, a timestamp offset, and input payment. It basically converts the timestamp_offset value to a generic round_offset, by dividing it with the constant value __SECONDS_PER_ROUND__.
It returns the corresponding output payment computed at the safe price.
__Important. The output of this endpoint (and any timestamp related endpoint) will return reliable data as long as the timestamp constant will remain unchanged at the protocol level.__


### getLpTokensSafePrice

```rust
    #[view(getLpTokensSafePrice)]
    fn get_lp_tokens_safe_price(
        &self,
        pair_address: ManagedAddress,
        start_round: Round,
        end_round: Round,
        liquidity: BigUint,
    ) -> MultiValue2<EsdtTokenPayment, EsdtTokenPayment>
```

This function allows you to simulate the value of both tokens within a liquidity pool based on a provided LP token amount. It receives the pair address, the start and end rounds, and the amount of LP tokens as parameters.
The function returns two output payments, one for each token in the pair, with their values computed at the safe price.

### getLpTokensSafePriceByRoundOffset

```rust
    #[view(getLpTokensSafePriceByRoundOffset)]
    fn get_lp_tokens_safe_price_by_round_offset(
        &self,
        pair_address: ManagedAddress,
        round_offset: Round,
        liquidity: BigUint,
    ) -> MultiValue2<EsdtTokenPayment, EsdtTokenPayment>
```

This function allows you to simulate the value of both tokens within a liquidity pool based on a provided LP token amount. It receives the pair address, a round_offset, and the amount of LP tokens as parameters. It works in the same way as the __getSafePriceByRoundOffset__ function for the round_offset, by computing the end round and the start round automatically, using the current block round and the round offset variable.
The function returns two output payments, one for each token in the pair, with their values computed at the safe price.

### getLpTokensSafePriceByDefaultOffset

```rust
    #[view(getLpTokensSafePriceByDefaultOffset)]
    fn get_lp_tokens_safe_price_by_default_offset(
        &self,
        pair_address: ManagedAddress,
        liquidity: BigUint,
    ) -> MultiValue2<EsdtTokenPayment, EsdtTokenPayment>
```

This function allows you to simulate the value of both tokens within a liquidity pool based on a provided LP token amount. It receives the pair address and the amount of LP tokens as parameters and works similarly to __getLpTokensSafePriceByRoundOffset__ endpoint, but instead of using a provided round_offset variable, it uses a default one which at this moment is set to 600 rounds (which translates in an one hour window).
The function returns two output payments, one for each token in the pair, with their values computed at the safe price.

### getLpTokensSafePriceByTimestampOffset

```rust
    #[view(getLpTokensSafePriceByTimestampOffset)]
    fn get_lp_tokens_safe_price_by_timestamp_offset(
        &self,
        pair_address: ManagedAddress,
        timestamp_offset: u64,
        liquidity: BigUint,
    ) -> MultiValue2<EsdtTokenPayment, EsdtTokenPayment>
```

This function allows you to simulate the value of both tokens within a liquidity pool based on a provided LP token amount. It receives the pair address, a timestamp_offset and the amount of LP tokens as parameters. Again, like the __getLpTokensSafePriceByRoundOffset__ endpoint, which automatically computes the start and end rounds of the query, this function calculates the round offset by dividing the timestamp_offset to a generic __SECONDS_PER_ROUND__ constant value.
The function returns two output payments, one for each token in the pair, with their values computed at the safe price.

## Legacy endpoints

In order to avoid backwards compatibility issues, the two legacy endpoints from Safe Price V1 were kept, but they now use the new Safe Price V2 logic. One important aspect here is that they are not part of the Safe Price V2 view factory contract, but instead they are actual endpoints in the __Pair SC__.
__Important. These endpoints are planned to be phased out at any point in future, thus we consider them as deprecated and we recommend the usage of the ones available in the View factory contract.__

### updateAndGetTokensForGivenPositionWithSafePrice

```rust
    #[endpoint(updateAndGetTokensForGivenPositionWithSafePrice)]
    fn update_and_get_tokens_for_given_position_with_safe_price(
        &self,
        liquidity: BigUint,
    ) -> MultiValue2<EsdtTokenPayment<Self::Api>, EsdtTokenPayment<Self::Api>>
```

This legacy endpoint is kept for backwards compatibility purposes, but it now works the same as the __getLpTokensSafePriceByDefaultOffset__ view function, by using the contract address as the pair_address. It receives only one parameter, the amount of LP tokens.
The function returns two output payments, one for each token in the pair, with their values computed at the safe price.

### updateAndGetSafePrice

```rust
    #[endpoint(updateAndGetSafePrice)]
    fn update_and_get_safe_price(
        &self,
        input: EsdtTokenPayment<Self::Api>,
    ) -> EsdtTokenPayment<Self::Api>
```

This legacy endpoint is kept for backwards compatibility purposes, but it now works the same as the __getSafePriceByDefaultOffset__ view function, by using the contract address as the pair_address. It receives only one parameter, the input payment.
It returns the corresponding output payment computed at the safe price.