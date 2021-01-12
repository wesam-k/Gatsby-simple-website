import React from "react"
import {Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo" 


const Wrapper = styled.div`
margin-bottom: 1.45rem;
max-width: 300px;
padding: 1.45rem 1.0875rem;
`



const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my first website</h1>
    <p>This is a sample site for the Gatsby beginner course</p>
    <Wrapper >
      <Image />
    </Wrapper>
    <Link to="/services/">Our Services</Link> <br />
    <Link to="/about/">About Us</Link> <br />
  </Layout>
)

export default HomePage
