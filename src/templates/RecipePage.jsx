import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../layout/main";
import SEO from "../components/seo";

const RecipesContentful = ({ data }) => {
  const page = data.contentfulRecipes;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>{page.title}</h1>
       <img src={node.image.file.url} />
      <div
        dangerouslySetInnerHTML={{
          __html: node.description.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulRecipes(slug: { eq: $slug }) {
      title
      author
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
`;

RecipesContentful.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecipesContentful;
