const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Maiar Exchange Docs",
  tagline:
    "Internet-scale DeFi: the scalable financial engine of the new internet economy. Powered by the Elrond Network.",
  url: "https://docs.maiar.exchange",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ElrondNetwork", // Usually your GitHub org/user name.
  projectName: "docs.maiar.exchange", // Usually your repo name.
  // ogImage: "img/share.png",
  // twitterImage: "img/share.png",
  themeConfig: {
    image: "img/share.png",
    metadatas: [
      {
        name: "twitter:title",
        content: "Maiar Exchange Docs",
      },
      {
        name: "twitter:description",
        content:
          "Internet-scale DeFi: the scalable financial engine of the new internet economy. Powered by the Elrond Network.",
      },
      {
        name: "og:title",
        content: "Maiar Exchange Docs",
      },
      {
        name: "og:description",
        content:
          "Internet-scale DeFi: the scalable financial engine of the new internet economy. Powered by the Elrond Network.",
      },
    ],
    navbar: {
      title: "Exchange Docs",
      logo: {
        alt: "Maiar",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "overview",
          label: "Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Features",
          items: [
            {
              label: "Overview",
              to: "/maiar-exchange-features/overview",
            },
            {
              label: "Swaps",
              to: "/maiar-exchange-features/swaps",
            },
            {
              label: "Liquidity",
              to: "/maiar-exchange-features/liquidity",
            },
            {
              label: "Farms",
              to: "/maiar-exchange-features/farms",
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
              href: "https://maiar.exchange/swap",
            },
            {
              label: "Liquidity",
              href: "https://maiar.exchange/liquidity",
            },
            {
              label: "Farms",
              href: "https://maiar.exchange/farms",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://elrond.com/blog/maiar-dex-public-test/",
            },
            {
              label: "FAQ",
              href: "/faq",
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
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        lightIcon: "\u2600",
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: { marginLeft: "2px" },
        lightIconStyle: { marginLeft: "1px" },
      },
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
