---
sidebar_position: 4
id: on-behalf-operations
---

[comment]: # (mx-exclude-context)

# onBehalf operations

The OnBehalf operations extend the Farm (farm-with-locked-rewards), Staking (farm-staking) and MetaStaking (farm-staking-proxy) smart contracts with the ability to allow whitelisted accounts or contracts to perform actions on behalf of users, enabling enhanced protocol composability while maintaining security through integration with the Permissions Hub smart contract.

## Introduction

This module allows third-party contracts (not limited to, but usability of this feature is more suitable to smart contracts) to perform certain operations on behalf of users, after being explicitly whitelisted through the Permissions Hub smart contract. Users can control which third party protocol can perform onBehalf operations for themselves, while third party protocols can build easier or more complex DeFi interactions.

## Permissions Hub Smart Contract

The following description is an excerpt from permissions hub docs [here](https://github.com/multiversx/mx-exchange-sc/tree/main/dex/permissions-hub)

The Permissions Hub is a security-focused smart contract that manages permissions for on-behalf operations across the MultiversX DeFi ecosystem. It allows users to whitelist specific contracts that can perform operations on their behalf, enabling secure contract-to-contract interactions while maintaining user control over their assets.

Third party protocols that implement onBehalf features can serve users with a one time transaction towards the Permissions Hub smart contract to whitelist the protocol's smart contracts as actors on behalf of the user.

### Deployed Permissions Hub contracts

| Environment | Permissions hub smart contract address |
|-------------|------------------------------------------------|
| Mainnet: | [erd1qqqqqqqqqqqqqpgq0a80r53sla2lx8wyfhqnz69prntkefs42jps3tdchu](https://explorer.multiversx.com/accounts/erd1qqqqqqqqqqqqqpgq0a80r53sla2lx8wyfhqnz69prntkefs42jps3tdchu) |
| Devnet: | [erd1qqqqqqqqqqqqqpgqwrntspndf3lqth9tgl9k4cde8prq3q4q0n4svee8fh](https://devnet-explorer.multiversx.com/accounts/erd1qqqqqqqqqqqqqpgqwrntspndf3lqth9tgl9k4cde8prq3q4q0n4svee8fh) |

### Whitelisting Contracts endpoint
Users can whitelist multiple contract addresses that they trust to operate on their behalf:
```rust
#[endpoint]
fn whitelist(&self, addresses_to_whitelist: MultiValueEncoded<ManagedAddress>)
```
- Allows users to add multiple trusted contracts in a single transaction
- Prevents duplicate whitelisting through built-in validation
- Each user maintains their own whitelist independently

### Removing Whitelisted Contracts endpoint
Users can remove previously whitelisted contracts:
```rust
#[endpoint(removeWhitelist)]
fn remove_whitelist(&self, addresses_to_remove: MultiValueEncoded<ManagedAddress>)
```
- Allows batch removal of whitelisted addresses
- Validates that addresses were previously whitelisted
- Maintains user control over their permissions

## Farm (farm-with-locked-rewards) Endpoints

The following description is an excerpt from farm-with-locked-rewards docs [here](https://github.com/multiversx/mx-exchange-sc/tree/main/dex/farm-with-locked-rewards#farm-with-locked-rewards-onbehalf-operations)

### enterFarmOnBehalf

```rust
#[payable("*")]
#[endpoint(enterFarmOnBehalf)]
fn enter_farm_on_behalf(&self, user: ManagedAddress) -> EnterFarmResultType<Self::Api>
```

The enterFarmOnBehalf function allows whitelisted contracts to enter farm positions on behalf of users. It receives several arguments:

- __user__ - The address of the user for whom the operation is being performed. This address must have whitelisted the caller contract through the Permissions Hub.
- __payment__ - The tokens to be used are received as payment in the transaction.

The function performs the following steps:
1. Validates that the caller is whitelisted by the user through Permissions Hub
2. Processes the farming tokens payment
3. Claims any pending boosted rewards for the original owner
4. Performs the enter farm operation on behalf of the original owner
5. Sends the new farm token to the caller
6. Sends the locked rewards, if any, to the original owner
7. Updates energy and progress for the original owner

### claimRewardsOnBehalf

```rust
#[payable("*")]
#[endpoint(claimRewardsOnBehalf)]
fn claim_rewards_on_behalf(&self) -> ClaimRewardsResultType<Self::Api>
```

The claimRewardsOnBehalf function enables whitelisted contracts to claim rewards on behalf of the users. This function does not require any address parameter, as the original owner is read from the farm position metadata. The operation requires:

- __payment__ - The farm token must be received as payment in the transaction.

The function performs these steps:
1. Processes the farm token payment
2. Extracts the original owner from the farm token attributes
3. Validates that the caller is whitelisted by the original owner
4. Claims and sends locked rewards to the original owner
5. Sends the new farm token to the caller

## Staking (farm-staking) Endpoints

The following description is an excerpt from farm-staking docs [here](https://github.com/multiversx/mx-exchange-sc/tree/main/farm-staking/farm-staking#farm-staking-onbehalf-operations)

### stakeFarmOnBehalf

```rust
#[payable("*")]
#[endpoint(stakeFarmOnBehalf)]
fn stake_farm_on_behalf(&self, user: ManagedAddress) -> EnterFarmResultType<Self::Api>
```

The stakeFarmOnBehalf function enables whitelisted contracts to create staking positions for users. It receives:

- __user__ - The address of the user for whom the staking position is being created
- __payment__ - The tokens to be staked are received as payment in the transaction

The function performs these operations:
1. Validates caller's whitelist status through Permissions Hub
2. Processes any pending boosted rewards for the user
3. Creates the staking position for the original owner
4. Sends the staking position to the caller
5. Sends the rewards, if any, to the original owner
6. Maintains energy system and progress tracking
7. Emits appropriate events with both caller and user information

### claimRewardsOnBehalf

```rust
#[payable("*")]
#[endpoint(claimRewardsOnBehalf)]
fn claim_rewards_on_behalf(&self) -> ClaimRewardsResultType<Self::Api>
```

The claimRewardsOnBehalf function allows whitelisted contracts to claim staking rewards. This function does not require any address parameter, as the original owner is read from the staking position metadata. It requires:

- __payment__ - The farm staking token must be received as payment

The function executes the following steps:
1. Validates the farm token and extracts the original owner
2. Verifies caller's whitelist status for the token owner
3. Claims any pending rewards
4. Creates new farm token with updated attributes
5. Updates weekly farm supply
6. Maintains energy and progress tracking
7. Distributes new farm token to caller and rewards to the original owner
8. Emits claim events with relevant information

## MetaStaking (farm-staking-proxy) Endpoints

The following description is an excerpt from farm-staking-proxy docs [here](https://github.com/multiversx/mx-exchange-sc/tree/main/farm-staking/farm-staking-proxy#farm-staking-proxy-onbehalf-operations)

### stakeFarmOnBehalf

```rust
#[payable("*")]
#[endpoint(stakeFarmOnBehalf)]
fn stake_farm_on_behalf(&self, original_owner: ManagedAddress) -> StakeProxyResult<Self::Api>
```

The stakeFarmOnBehalf function enables whitelisted contracts to create dual yield positions. It receives:

- __original_owner__ - The address of the user for whom the position is being created
- __payments__ - Multiple token payments required for the dual yield position:
  - First payment must be an LP farm token
  - Additional payments must belong to the same original owner

The function performs these operations:
1. Validates caller's whitelist status through Permissions Hub
2. Verifies ownership of all provided tokens
3. Creates the dual yield position
4. Distributes the results:
   - LP farm boosted rewards to original owner
   - Staking boosted rewards to original owner
   - Dual yield tokens to caller

### claimDualYieldOnBehalf

```rust
#[payable("*")]
#[endpoint(claimDualYieldOnBehalf)]
fn claim_dual_yield_on_behalf(&self) -> ClaimDualYieldResult<Self::Api>
```

The claimDualYieldOnBehalf function allows whitelisted contracts to claim rewards from dual yield positions. It requires:

- __payment__ - A dual yield token payment

The function performs these steps:
1. Extracts original owner from underlying farm position
2. Validates caller's whitelist status for the token owner
3. Claims both LP farming and staking rewards
4. Distributes rewards:
   - LP farm rewards to original owner
   - Staking farm rewards to original owner
   - New dual yield tokens to caller

## exitOnBehalf
The exit operation remains under the direct control of the position owner to ensure maximum security. When third-party contracts interact with farming or staking positions through onBehalf operations, they receive and hold the position tokens. These tokens maintain the original owner information in their attributes, protecting the user's ownership rights. To exit their position, users must first reclaim their position tokens from the third-party contract through that protocol's specific mechanisms. Once users have regained control of their position tokens, they can perform the standard exit operation directly through the specific xExchange contract. 
This design ensures users maintain ultimate control over their funds while allowing protocols to build complex DeFi interactions.

## Links

xExchange Smart Contracts code and additional information can be found in their repos & readmes

- [Permissions hub smart contract](https://github.com/multiversx/mx-exchange-sc/tree/main/dex/permissions-hub)
- [Farm with loked rewards](https://github.com/multiversx/mx-exchange-sc/tree/main/dex/farm-with-locked-rewards)
- [Farm staking](https://github.com/multiversx/mx-exchange-sc/tree/main/farm-staking)
- [Farm staking proxy](https://github.com/multiversx/mx-exchange-sc/tree/main/farm-staking/farm-staking-proxy)