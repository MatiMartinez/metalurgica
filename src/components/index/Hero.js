import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import HeroText from "./HeroText"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "old-roof.jpg" }) {
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
      <HeroText />
      <WrapperBg>
        <FakeImg fluid={data.bg.childImageSharp.fluid} />
      </WrapperBg>
      <Overlay />
    </Container>
  )
}

export default Hero

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6rem;
  position: relative;
  height: calc(100vh - 100px);

  @media (max-width: 768px) {
    padding-left: 4rem;
  }

  @media (max-width: 576px) {
    padding-left: 2rem;
  }

  @media (max-width: 375px) {
    padding-left: 1rem;
  }
`

const WrapperBg = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  bottom: 0;
  right: 0;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000000;
  opacity: 0.4;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: 100%;
`
