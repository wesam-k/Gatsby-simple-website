import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import Layout from "../layout/main";
import Image from "../components/image";
import SEO from "../components/seo";

const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  max-width: 300px;
  padding: 1.45rem 1.0875rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;


const HomePage = () => (
  <Layout disable="true">
    <SEO title="Home" />
    <h1>Welcome to my first Gatsby website</h1>
    <p>This is a sample site for the Gatsby beginner course</p>
    <Wrapper>
      <Image />
    </Wrapper>
    <Inner>
      <Link to="/services/">Our Services</Link> <br />
      <Link to="/recipes/">Recipes</Link> <br />
      <Link to="/about/">About Us</Link> <br />
    </Inner>
  </Layout>
);

export default HomePage;
