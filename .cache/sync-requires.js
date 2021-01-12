const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-404-jsx": hot(
    preferDefault(
      require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/404.jsx")
    )
  ),
  "component---src-pages-about-jsx": hot(
    preferDefault(
      require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/about.jsx")
    )
  ),
  "component---src-pages-index-jsx": hot(
    preferDefault(
      require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/index.jsx")
    )
  ),
  "component---src-pages-services-jsx": hot(
    preferDefault(
      require("/Users/wesam.alkfere/Traning utils/contentful/gatsby-course/src/pages/services.jsx")
    )
  ),
};
