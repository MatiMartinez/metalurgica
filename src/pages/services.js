import React from "react"

import Layout from "../components/shared/layout"
import Hero from "../components/services/Hero"
import BlackService from "../components/services/BlackService"
import WhiteService from "../components/services/WhiteService"

const Services = () => {
  return (
    <Layout>
      <Hero />
      <BlackService />
      <WhiteService />
    </Layout>
  )
}

export default Services
