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
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Intro",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "What Is Maiar DEX?",
              to: "/docs/intro",
            },
            {
              label: "Liquidity Pools",
              to: "/docs/liquidity-pools",
            },
            {
              label: "What Is Maiar DEX?",
              to: "/docs/token-swaps",
            },
            {
              label: "Yield Farming",
              to: "/docs/yield-farming",
            },
          ],
        },
        {
          title: "Architecture",
          items: [
            {
              label: "Router Smart Contract",
              to: "/docs/maiar-dex-architecture/pair-smart-contract",
            },
            {
              label: "Pair Smart Contract",
              to: "/docs/maiar-dex-architecture/router-smart-contract",
            },
            {
              label: "Farms",
              to: "/docs/maiar-dex-architecture/farms",
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
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
