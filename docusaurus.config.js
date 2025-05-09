// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();
const math = require("remark-math");
const katex = require("rehype-katex");

// Update theme imports for prism-react-renderer v2
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.oceanicNext;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "xExchange Docs",
  titleDelimiter: "•",
  tagline:
    "xExchange is a platform for trading and engaging with decentralized finance running on the MultiversX Network.",
  // Set the production url of your site here
  url: "https://docs.xexchange.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicons/favicon.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "multiversx", // Usually your GitHub org/user name.
  projectName: "mx-exchange-docs", // Usually your repo name.

  // mermaid support
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          /* other docs plugin options */
          remarkPlugins: [math],
          rehypePlugins: [katex],
          exclude: ["glossary/**", "overview.md"],
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://cdn.multiversx.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "mask-icon",
        href: "/img/favicons/safari-pinned-tab.svg",
        color: "#007cff",
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      // Replace with your project's social card
      image: "img/launch.webp",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "MultiversX xExchange Docs",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            href: "/welcome/overview",
            label: "Welcome",
            position: "left",
          },
          {
            href: "/xexchange-products/overview",
            label: "Products",
            position: "left",
          },
          {
            href: "/mex/what-is-mex",
            label: "$MEX",
            position: "left",
          },
          {
            href: "https://github.com/multiversx",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
          {
            href: "https://t.me/xExchangeApp",
            position: "right",
            className: "header-telegram-link",
            "aria-label": "Chat",
          },
          {
            type: "dropdown",
            label: "Websites",
            position: "right",
            className: "header-app-change",
            "aria-label": "Websites",
            items: [
              {
                label: "MultiversX Wallet",
                href: "https://wallet.multiversx.com",
                target: "_blank",
              },
              {
                label: "Blockchain Explorer",
                href: "https://explorer.multiversx.com",
                target: "_blank",
              },
              {
                label: "MultiversX Bridge",
                href: "https://bridge.multiversx.com",
                target: "_blank",
              },
              {
                label: "xPortal Wallet",
                href: "https://xportal.com",
                target: "_blank",
              },
              {
                label: "xLaunchpad",
                href: "https://xlaunchpad.com",
                target: "_blank",
              },
            ],
          },
          {
            href: "https://xexchange.com",
            position: "right",
            className: "header-open-app-button",
            "aria-label": "Open xExchange App",
            label: "Open App",
          },
        ],
      },

      footer: {
        style: "light",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} MultiversX. All rights reserved.`,
      },
      // Update prism config
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust", "tsx", "jsonp"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: `${process.env.REACT_APP_ALGOLIA_APP_ID}`,
        // Public API key: it is safe to commit it
        apiKey: `${process.env.REACT_APP_ALGOLIA_SEARCH_KEY}`,
        indexName: "dev_multiversx",
        contextualSearch: false,
      },
      slugPreprocessor: (slugBase) =>
        slugBase.replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, ""),
    }),

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
        createRedirects(existingPath) {
          if (existingPath.includes("/erdjs")) {
            return [
              // erdjs -> sdk-js
              existingPath.replace(
                "/sdk-and-tools/erdjs",
                "/sdk-and-tools/sdk-js"
              ),
              existingPath.replace(
                "/sdk-and-tools/erdjs/erdjs-cookbook",
                "sdk-and-tools/sdk-js/sdk-js-cookbook"
              ),
              existingPath.replace(
                "/sdk-and-tools/erdjs/extending-erdjs",
                "sdk-and-tools/sdk-js/extending-sdk-js"
              ),
              existingPath.replace(
                "/sdk-and-tools/erdjs/writing-and-testing-erdjs-interactions",
                "sdk-and-tools/sdk-js/writing-and-testing-sdk-js-interactions"
              ),
              existingPath.replace(
                "/sdk-and-tools/erdjs/erdjs-migration-guides",
                "sdk-and-tools/sdk-js/sdk-js-migration-guides"
              ),
              existingPath.replace(
                "/sdk-and-tools/erdjs/erdjs-signing-providers",
                "sdk-and-tools/sdk-js/sdk-js-signing-providers"
              ),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-3K8PZXNLVF",
        anonymizeIP: true,
      },
    ],
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
