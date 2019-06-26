// vendors
import React from "react"

// components
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../views/Hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />

    <Hero />
  </Layout>
)

export default IndexPage
