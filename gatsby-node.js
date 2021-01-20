const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allContentfulRecipes {
          edges {
            node {
              title
              slug
              image {
                file {
                  url
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        throw result.errors;
      }

      const blogPost = path.resolve(`./src/templates/Recipes-contentful.jsx`);
      const posts = result.data.allContentfulRecipes.edges;

      // posts.forEach((post, index) => {
      //   const previous =
      //     index === posts.length - 1 ? null : posts[index + 1].node;
      //   const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: posts.node.slug,
        component: blogPost,
        context: {
          slug: posts.node.slug,
          // previous,
          // next,
        },
      });
    })
    .catch((error) => console.log("Error from contentful date", error));
};
