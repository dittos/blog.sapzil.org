// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Sapzil',
  tagline: 'Ditto Kim\'s Dev Log',
  url: 'https://blog.sapzil.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-7500828-6',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '👷 The Sapzil',
        items: [
          {
            label: 'Posts',
            to: '/',
            activeBaseRegex: '^/(|page/\\d+/?)$',
          },
          {
            label: 'Tags',
            to: '/tags/',
          },
        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()}. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'kotlin', 'groovy', 'nix'],
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
  
  trailingSlash: true,

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700|Inter:400,700&display=swap',
      media: 'print',
      onload: "this.media='all'",
    },
  ],
};

module.exports = config;
