import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import InfoWrapper from "./InfoWrapper"

const MainContact = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "3-men-roof.jpg" }) {
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
      <HeroWrapper>
        <WrapperBg>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
          <ColorFake />
        </WrapperBg>
      </HeroWrapper>
      <InfoWrapper />
    </Container>
  )
}

export default MainContact

const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  background-color: #f89d13;
`

const HeroWrapper = styled.div`
  position: relative;
  height: calc(100vh - 100px);
`

const WrapperBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const FakeImg = styled(Image)`
  height: 100%;
  width: 100%;
`

const ColorFake = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.2;
`
