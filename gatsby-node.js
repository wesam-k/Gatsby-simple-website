const path = require("path");

const RecipePageComponent = path.resolve(`./src/templates/RecipePage.jsx`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
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
  );
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
};
