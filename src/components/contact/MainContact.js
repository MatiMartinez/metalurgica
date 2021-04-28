import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import ContactCard from "./ContactCard"

const MainContact = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ContactCard
        name="Sergio Davila"
        phone="261 3532900"
        link="https://wa.me/%2B5492613532900"
      />
      <ContactCard
        name="Facunda Davila"
        phone="261 6207970"
        link="https://wa.me/%2B5492616207970"
      />
      <ContactCard
        name="Leandro Davila"
        phone="261 2630672"
        link="https://wa.me/%2B5492612630672"
      />
      <ImageWrapper>
        <FakeImg fluid={data.bg.childImageSharp.fluid} />
      </ImageWrapper>
    </Container>
  )
}

export default MainContact

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 4rem;
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  bottom: 2rem;
  right: 2rem;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: 100%;
`
