import * as React from "react"

import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import Hero from "../components/index/Hero"
import Info from "../components/index/Info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Info />
  </Layout>
)

export default IndexPage
