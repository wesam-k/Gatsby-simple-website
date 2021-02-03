import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../layout/main";
import SEO from "../components/seo";

const Wrapper=styled.div`
margin-bottom: 50px;
` 
const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Recipes = ({ data }) => {
  const page = data.allContentfulRecipes.edges;
  return (
    <Layout>
      <SEO title="Recipes" />
      <Wrapper as='h4'>Click on your favorite recipe</Wrapper>
      <ol>
        {page.map(({ node }) => {
          return (
            <Inner key={node.id}>
              <h2>
                <li>
                  <Link to={`/${node.slug}`}>{node.title}</Link>
                </li>
              </h2>
            </Inner>
          );
        })}
      </ol>
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
          slug
          title
          author
          image {
            file {
              url
            }
          }
          value {
            json
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
