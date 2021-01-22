import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Layout from "../layout/main"; 
import SEO from "../components/seo";

const Wrapper = styled.div`
  margin: 50px 20px;
  padding: 10px;
`;
const Image = styled.img`
  width: 600px;
  height: 500px;
`;
const Recipes = ({ data }) => {
  const page = data.allContentfulRecipes.edges;
  return (
    <Layout>
      <SEO title="Recipes" />
      {page.map(({ node }) => {
        return (
          <Wrapper>
            <h2 key={node.id}>
              <Link to={`/${node.slug}`}>{node.title}</Link>
            </h2>
            <Image src={node.image.file.url} />
            <div
              dangerouslySetInnerHTML={{
                __html: node.description.childMarkdownRemark.html,
              }}
            />
          </Wrapper>
        );
      })}
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allContentfulRecipes {
      edges {
        node {
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
    }
  }
`;

Recipes.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Recipes;
