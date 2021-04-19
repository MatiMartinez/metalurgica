import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import InfoContact from "./InfoContact"

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
      <LeftWrapper>
        <TitleWrapper>
          <SecondaryTitle>Tienes alguna</SecondaryTitle>
          <MainTitle>consulta ?</MainTitle>
        </TitleWrapper>
        <InfoContact />
      </LeftWrapper>
      <RightWrapper>
        <ImageWrapper>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
        </ImageWrapper>
      </RightWrapper>
    </Container>
  )
}

export default MainContact

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  padding: 4rem 0 4rem 6rem;
`

const SecondaryTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #e6dedd;
`

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`

const RightWrapper = styled.div`
  position: relative;
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: 100%;
`
