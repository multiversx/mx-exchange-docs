const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Docs",
  tagline: "Maiar Exchange Docs",
  url: "https://docs.maiar.exchange",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Elrond Network", // Usually your GitHub org/user name.
  projectName: "docs.maiar.exchange", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Exchange Docs",
      logo: {
        alt: "Maiar",
        src: "img/logo.svg",
      },
      // items: [
      //   {
      //     type: "doc",
      //     docId: "intro",
      //     label: "Intro",
      //   },
      //   {
      //     type: "doc",
      //     docId: "liquidity-pools",
      //     label: "Liquidity Pools",
      //   },
      //   {
      //     type: "doc",
      //     docId: "token-swaps",
      //     label: "Token Swaps",
      //   },
      //   {
      //     type: "doc",
      //     docId: "yield-farming",
      //     label: "Yield Farming",
      //   },
      // ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "What Is Maiar DEX?",
              to: "/intro",
            },
            {
              label: "Token Swaps",
              to: "/token-swaps",
            },
            {
              label: "Liquidity Pools",
              to: "/liquidity-pools",
            },
            {
              label: "Yield Farming",
              to: "/yield-farming",
            },
          ],
        },
        {
          title: "Architecture",
          items: [
            {
              label: "Router Smart Contract",
              to: "/maiar-dex-architecture/router-smart-contract",
            },
            {
              label: "Pair Smart Contract",
              to: "/maiar-dex-architecture/pair-smart-contract",
            },
            {
              label: "Farms",
              to: "/maiar-dex-architecture/farms",
            },
          ],
        },
        {
          title: "Exchange",
          items: [
            {
              label: "Swap",
              href: "https://devnet.maiar.exchange/swap",
            },
            {
              label: "Liquidity",
              href: "https://devnet.maiar.exchange/liquidity",
            },
            {
              label: "Farms",
              href: "https://devnet.maiar.exchange/farms",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://elrond.com/blog/maiar-exchange/",
            },
            {
              label: "FAQ",
              href: "https://elrond.com/blog/maiar-exchange-mex-tokenomics/",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Elrond Network. Made with ❤️ by the Elrond team.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
