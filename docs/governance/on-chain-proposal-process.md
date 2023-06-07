---
sidebar_position: 3
id: on-chain proposal process
---

[comment]: # (mx-exclude-context)

# On-Chain Proposal Process

Now that you have received the knowledge and consideration from the community and converged to a final version of your proposal, if you have a decent level of confidence that your proposal will be approved by the majority of the community, it is time to submit it to the on-chain governance vote!

Below we describe the governance rules and process.

[comment]: # (mx-context-auto)

## Governance rules summary

To publish the xEIP on-chain, the xEIP creator provides an IPFS link to a PDF which contains all the information about the proposal, and also chooses the voting period (which must be between 1 and 10 days).

He must further deposit an amount of XMEX whose total Energy is at least 1.5 trillion in the "Governance Depositor" contract.
During the voting period, users have the following voting options:

- **Yes** vote, to vote in favor of xEIP.
- **No** vote, to vote against the xEIP.
- **White** vote, to vote neither for or against the xEIP, which however counts as a genuine participation.
- **NoWithVeto** vote, which usually are chosen to counter proposals that spam, harm a minority, or violate the rules of participation (i.e., social agreements that have passed governance and are therefore accepted as rules). There is no immediate additional financial cost to voters in voting with "NoWithVeto" - you are not risking anything by using this option.
  Voters can change their vote at any time before the end of the election period.

The governance power of a user increases with its energy. The rule is that the governance power is the square root of the energy, that is $power=\sqrt{energy}$. For example, a user who has 100 Energy has 10 Governance Power.

A vote passes if and only if, at the end of the voting period, the following 3 criteria are met:

- **Majority**: At least 50% of the participating governance power has voted "Yes" for the proposal,
- **Quorum**: At least 40% of the total governance power has participated in the proposal.
- **No Veto**: Less than 33.40% of participating voting power has voted "NoWithVeto" for the proposal.

At the end of the voting period, the XMEX deposit of the proposer is fully refunded, except if the proposal was vetoed, in which case a certain percentage of the deposit is burnt and the rest is refunded.

If the proposal has been approved, provided the proposal’s feasibility, the xExchange team will take action to implement it.

[comment]: # (mx-context-auto)

## Governance process step-by-step

### Publishing the xEIP on-chain

You can create the xEIP on xExchange governance page (https://xexchange.com/governance), and the xEIP is then published on-chain (in the governance smart contract).

To create the xEIP, you would first write down all the information about the xEIP in a PDF: title, summary, and detailed description. Then, you would upload the PDF on IPFS (a reliable decentralized storage solution). This will make sure that all users will vote on a common, censorship resistant and non-editable version of the proposal.

You will then create the on-chain proposal: by providing the IPFS link, choosing a voting period (between 1 and 10 days), and depositing an XMEX amount whose total Energy is at least 1.5 trillion.

[comment]: # (mx-context-auto)

### About the Deposit

As explained in the previous paragraph, before a governance proposal enters the voting period (i.e., for a proposal to be voted on), an amount of XMEX whose total Energy is at least 1.5 trillion must be accurately recorded. As an xEIP creator, you will deposit these tokens in the "Governance Depositor" smart contract.

In case you have not enough funds to cover the entire deposit, the "Governance Depositor" in fact allows you to ask friends and larger Energy holders to top up the remaining XMEX tokens until it reaches the deposit threshold. This deposit threshold must be attained within a maximum of 10 days, otherwise all users will be refunded.

On Twitter, a sizable portion of the community may be found, and it may be a good idea to involve it in your proposal during the deposit period to get them ready to vote.

Once the deposit threshold is met, the Governance Depositor submits the xEIP to the governance contract, and the voting period starts.

Only when the proposal is vetoed, a certain percentage of the deposit will be burnt. Otherwise, deposits will not be burnt in, even if the vote did not pass, for example if the quorum or the "Yes" majority were not reached.
During the Voting Period
During the voting period, users upvote proposal ("Yes" vote), downvote it ("No" vote), participate with a white vote which is neither for or against the proposal ("White" vote), or veto the proposal ("NoWithVeto" vote).

As the xEIP creator, you should now keep tabs on the Energy holders who have and have not voted. To make sure they are aware of your plan, that they may ask you any questions about it, and that they are ready to vote, you should re-engage directly with the highest-ranking Energy holders.

Keep in mind that before the voting period finishes, any voter may modify their vote at any time. The biggest danger is that Energy holders (for a variety of reasons) won't vote at all. Energy holders typically need several reminders to vote. However, be mindful not going to the other extreme and spamming Energy holders.

[comment]: # (mx-context-auto)

### What determines whether the governance proposal passes?

At the end of the voting period, users can’t vote any more and the xEIP has either passed the governance vote, or been rejected. There are three requirements:

- **Majority**: At least 50% of the participating governance power has voted "Yes" for the proposal,
- **Quorum**: At least 40% of the total governance power has participated in the proposal.
- **No Veto**: Less than 33.40% of participating voting power has voted "NoWithVeto" for the proposal.
