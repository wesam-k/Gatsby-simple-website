const path = require("path");

const RecipePageComponent = path.resolve(`./src/templates/RecipePage.jsx`);

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

      const posts = result.data.allContentfulRecipes.edges;

      posts.forEach((post) => {
        createPage({
          path: post.node.slug,
          component: RecipePageComponent,
          context: {
            slug: post.node.slug,
          },
        });
      });
    })
    .catch((error) => console.log("Error from contentful date", error));
};
