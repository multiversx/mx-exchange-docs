---
sidebar_position: 9
id: xmex-move
sidebar_label: Transferring xMEX
title: Transferring xMEX
---

[comment]: # (mx-context-auto)
 
:::info
xMEX is special for its transfer locking mechanism, since it is supposed to be bound to the account. But sometimes people have to move for various reasons, so do tokens.
:::

The xMEX Move function comes as a solution for this precise and usually inconvenient case.

The xMEX Move (also known as Escrow) contract facilitates the transfer of xMEX from one account to another, with limitations in place to overcome scamming and abuse of token transfers that go against the idea of holding xMEX.
Therefore, it shall be used mindfull of its strict conditions and, most likely, only in extreme situations.

## xMEX Move flow

 1. Sender selects the batch of xMEX tokens to be transferred; after Move button clicked, sender has to fill in the receiver address and initiate the tokens transfer;
 2. Receiver will be able to redeem the transferred tokens ONLY after a certain amount of days;

## xMEX Move limitations
 - Sender can only send to a receiver ONCE per 30 days;
 - Receiver will be able to redeem the tokens after 30 days;
 - If receiver did not redeemed the tokens from a specific sender, that sender will not be able to send tokens again to the same receiver. Therefore, the receiver has to redeem the tokens first;
 - Receiver can't accept new transfers from any other address after a sender sends tokens to it. A 30 days cooldown period is applied to receiver after a transfer was initiated towards the receiver.
 - Only xMEX can be moved, while LKMEX can not. The only way LKMEX can be moved is via conversion to xMEX beforehand.

## Canceling xMEX moving transfers
We care about the security of users' accounts. That’s why the contract has a transfer cancelling feature available that allows an Admin to cancel malicious transfers that occur out of account thefts, exploits or scams.
In case you did not initiate an xMEX transfer, please contact the xExchange team. You'll need to provide a proof of a complaint emited by an official police authority that we can use as a basis to cancel unauthorized xMEX transfers from your account.

Please note the fact that the team can not and will not cancel any ongoing transfer that doesn't fall into this legal category of complaints. Therefore, the integrity and correctness of any transfer is under the sole responsibility of the users.
