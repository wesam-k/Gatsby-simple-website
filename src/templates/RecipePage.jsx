import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Layout from "../layout/main";
import SEO from "../components/seo";

const Rictext = {
  renderNode: {
    [BLOCKS.h2]: (node, children) => {
      return <h2>{children}</h2>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <ul>{children}</ul>;
    },
  },
};

const Wrapper = styled.div`
  margin: 50px 20px;
  padding: 10px;
`;

const Image = styled.img`
  width: 600px;
  height: 500px;
`;

const LinkStyles = styled(Link)`
  ${({ theme }) => css`
    text-decoration: underline;
    margin-top: 2rem;
    padding: 1rem;
    color: ${theme.colors.gray};
  `}
`;
const RecipesContentful = ({ data }) => {
  const page = data.contentfulRecipes;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <Wrapper key={page.id}>
        <h2>
          <Link src={`/${page.slug}`}>{page.title}</Link>
        </h2>
        <Image src={page.image.file.url} />
        <div>{documentToReactComponents(page.value.json, Rictext)}</div>
        <LinkStyles to="/recipes/"> Back to the Recipes</LinkStyles>
      </Wrapper>
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
      value {
        json
      }
    }
  }
`;

RecipesContentful.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecipesContentful;
