const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/index.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/services.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/using-typescript.tsx")))
}

