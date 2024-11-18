import {
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faCube, faBolt, faLandmark } from "@fortawesome/free-solid-svg-icons";

const homepage = {
  hero: {
    title: "xExchange Documentation",
    subtitle: "xExchange is a decentralized finance (DeFi) platform on the MultiversX Network, where users can participate as traders or liquidity providers.",
    cards: [
      {
        title: "Introduction",
        text: "Learn about the core concepts of the xExchange Protocol. Trading, Pools, Energy and more.",
        link: "/xexchange-features/overview",
        icon: faBolt,
      },
      {
        title: "Products",
        text: "Discover how to use xExchange products like Trade, Liquidity Pools, Yield Farming, Staking, Dual Farms, and more.",
        link: "/xexchange-products/overview",
        icon: faCube,
      },
      {
        title: "Guides",
        text: "Learn step by step how to use xExchange features and how to leverage them to your advantage.",
        link: "/guides/overview",
        icon: faBook,
      },
    ],
  },
  features: {
    title: "Do more with xEchange",
    cards: [
      {
        title: "Trade",
        text: "Trade or swap hundreds of tokens.",
        link: "/tokens/intro",
      },
      {
        title: "Earn",
        text: "Add liquidity, earn fees and rewards.",
        link: "/wallet/overview",
      },
      {
        title: "Farm",
        text: "Stake your liquidity and earn xMEX",
        link: "/integrators/overview",
      },
      {
        title: "Stake",
        text: "Stake your tokens and earn rewards.",
        link: "/learn/architecture-overview",
      },
      {
        title: "Boost your Rewards",
        text: "Get a higher APR on your positions.",
        link: "/learn/space-vm",
      },
      {
        title: "Create Liquidity Pool",
        text: "List your token or create pool.",
        link: "/learn/EGLD#getting-egld",
      },
      {
        title: "Participate in Governance",
        text: "Vote on the future of xExchange.",
        link: "https://multiversx.com/builders/builder-tools-resources",
      },
      {
        title: "For Developers",
        text: "Start building on xExchange.",
        link: "https://multiversx.com/builders/build-your-first-multiversx-dapp-in-30-minutes",
      },
    ],
  },
  promo: {
    title: "Supercharged by MEX",
    tag: "Token",
    subtitle:
      "MEX is the fully community-owned token that drives xExchange. It plays a key role in governance, fueling the ongoing decision-making that keeps xExchange at the forefront of innovation, optimizing its operations, and shaping listing policies.",
    link: "mex-tokenomics/what-is-mex",
    button: "Discover MEX",
  },
  community: {
    title: "Engage the community",
    subtitle:
      "Join our vibrant community and participate in live discussions shaping the future of xExchange.",
    cards: [
      {
        title: "Follow @xExchangeApp",
        text: "Stay updated on xExchange and connect with our growing community.",
        link: "https://twitter.com/xExchangeApp",
        icon: faXTwitter,
      },
      {
        title: "Telegram",
        text: "Discuss trading, share insights, and get real-time support from fellow users.",
        link: "https://t.me/xExchangeApp",
        icon: faTelegram,
      },
      {
        title: "Agora Forum",
        text: "Join discussions, share ideas, and participate in our community forum.",
        link: "https://stackoverflow.com/questions/tagged/multiversx",
        icon: faLandmark,
      },
    ],
  },
  resources: {
    subtitle: "More resources:",
    links: [
      {
        text: "Goverance Portal",
        link: "https://xexchange.com/governance",
      },
      {
        text: "Buy Crypto",
        link: "https://buy.multiversx.com/",
      },
      {
        text: "Bridge to MultiversX",
        link: "https://bridge.multiversx.com/",
      },      
      {
        text: "Economics Paper",
        link: "https://xexchange.com/x-exchange-economics.pdf",
      },
    ],
  },
};

export default homepage;
