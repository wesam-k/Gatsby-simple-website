module.exports = [
  {
    plugin: require("../node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),
    options: { plugins: [] },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-manifest/gatsby-browser.js"),
    options: {
      plugins: [],
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/gatsby-icon.png",
      legacy: true,
      theme_color_in_head: true,
      cache_busting_mode: "query",
      crossOrigin: "anonymous",
      include_favicon: true,
      cacheDigest: "4a9773549091c227cd2eb82ccd9c5e3a",
    },
  },
  {
    plugin: require("../node_modules/gatsby-plugin-mdx/gatsby-browser.js"),
    options: {
      plugins: [],
      extension: [".md", ".mdx", ".mx"],
      gatsbyRemarkPlugins: [
        { resolve: "gatsby-remark-images", options: { maxWidth: 1200 } },
      ],
    },
  },
  {
    plugin: require("../gatsby-browser.js"),
    options: { plugins: [] },
  },
];
