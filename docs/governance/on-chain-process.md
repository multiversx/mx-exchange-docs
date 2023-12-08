---
sidebar_position: 3
id: on-chain-process
---

[comment]: # (mx-exclude-context)

# On-Chain Proposal Process

Now that you have received the knowledge and consideration from the community and converged to a final version of your proposal, if you have a decent level of confidence that your proposal will be approved by the majority of the community, it is time to submit it to the on-chain governance vote!

Below we describe the governance rules and process.

[comment]: # (mx-context-auto)

## Governance rules summary

To publish the xEIP on-chain, the xEIP creator deposits 1 billion MEX and provides a hash of the proposal text which contains all the information about the proposal. If these criterions are satisfied, a voting period of 10 days starts, during which users have the following voting options:

- **Yes** vote, to vote in favor of xEIP.
- **No** vote, to vote against the xEIP.
- **White** vote, to vote neither for or against the xEIP, which however counts as a genuine participation.
- **NoWithVeto** vote, which usually are chosen to counter proposals that spam, harm a minority, or violate the rules of participation (i.e., social agreements that have passed governance and are therefore accepted as rules). There is no immediate additional financial cost to voters in voting with "NoWithVeto" - you are not risking anything by using this option.

Right now, users can't change their vote once it is placed. But in a future version of the on-chain governance, they will be able to do so at any time before the end of the voting period. In addition, the proposer will be able to choose the voting period of his proposal and to choose a voting delay before the voting period starts. Both the voting period and the voting delay can be chosen to be any duration between 1 day and 10 days.

The governance power of a user increases with its energy. The rule is that the governance power is the square root of the energy, that is $power=\sqrt{energy}$. For example, a user who has 100 Energy has 10 Governance Power.

A vote passes if and only if, at the end of the voting period, the following 3 criteria are met:

- **Majority**: At least 50% of the participating governance power has voted "Yes" for the proposal,
- **Quorum**: At least 40% of the total energy has participated in the proposal.
- **No Veto**: Less than 33.40% of participating voting power has voted "NoWithVeto" for the proposal.

At the end of the voting period, the MEX deposit of the proposer is fully refunded, except if the proposal was vetoed, in which case 50% of the deposit is burnt.

If the proposal has been approved, provided the proposal’s feasibility, the xExchange team will take action to implement it.

[comment]: # (mx-context-auto)

## Governance process step-by-step

### Publishing the xEIP on-chain

The xEIP can be published for on-chain voting by calling the governance smart contract, and will then be visible on xExchange governance page (https://xexchange.com/governance).

To create the xEIP, you would first write down all the information about the xEIP in a text file: title, summary, and detailed description. Then, you would hash that text file using [SHA-1 hash function](https://en.wikipedia.org/wiki/SHA-1). This will make sure that users vote on a common, non-ambiguous proposal text.

You will then create the on-chain proposal: by providing the hash of the proposal text and depositing 1 billion MEX. 

[comment]: # (mx-context-auto)

### About the Deposit

As explained in the previous paragraph, before a governance proposal enters the voting period (i.e., for a proposal to be voted on), the xEIP creator must deposit an amount of 1 billion MEX in the governance contract.

Only when the proposal is vetoed, 50% of the deposit will be burnt, and the other 50% will be refunded. Otherwise, the deposit will not be burnt, and will be fully refunded, even if the vote did not pass, for example if the quorum or the "Yes" majority were not reached. During the voting period, users upvote proposal ("Yes" vote), downvote it ("No" vote), participate with a white vote which is neither for or against the proposal ("White" vote), or veto the proposal ("NoWithVeto" vote).

In a future version of the on-chain governance, in case you have not enough funds to cover the entire deposit, you will be allowed to associate with other MEX holders in order to provide the minimal MEX deposit. This deposit threshold will have to be attained within a maximum of 10 days, otherwise all users will be refunded.

As the xEIP creator, you should now keep track of the Energy holders who have and have not voted. To make sure they are aware of your plan, that they understand the proposal correctly, and that they are ready to vote, you should re-engage directly with them. The biggest danger is that Energy holders (for a variety of reasons) won't vote at all. Energy holders typically need several reminders to vote. However, be mindful not going to the other extreme and spamming Energy holders.

[comment]: # (mx-context-auto)

### What determines whether the governance proposal passes?

At the end of the voting period, users can’t vote any more and the xEIP has either passed the governance vote, or been rejected. There are three requirements:

- **Majority**: At least 50% of the participating governance power has voted "Yes" for the proposal,
- **Quorum**: At least 40% of the total energy power has participated in the proposal.
- **No Veto**: Less than 33.40% of participating voting power has voted "NoWithVeto" for the proposal.
