var plugins = [
  {
    plugin: require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/node_modules/gatsby-plugin-react-helmet/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    plugin: require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/node_modules/gatsby-plugin-styled-components/gatsby-ssr"),
    options: {
      plugins: [],
      displayName: true,
      fileName: true,
      minify: true,
      transpileTemplateLiterals: true,
      pure: false,
    },
  },
  {
    plugin: require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/node_modules/gatsby-plugin-manifest/gatsby-ssr"),
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
    plugin: require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/node_modules/gatsby-plugin-mdx/gatsby-ssr"),
    options: {
      plugins: [],
      extension: [".md", ".mdx", ".mx"],
      gatsbyRemarkPlugins: [
        { resolve: "gatsby-remark-images", options: { maxWidth: 1200 } },
      ],
    },
  },
  {
    plugin: require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/node_modules/gatsby-plugin-google-fonts/gatsby-ssr"),
    options: {
      plugins: [],
      fonts: ["roboto mono", "muli:400,400i,700,700i"],
      display: "swap",
    },
  },
];
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map((plugin) => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter((result) => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
