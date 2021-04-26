import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import InfoWrapper from "./InfoWrapper"

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "men-back.jpg" }) {
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
      <Title>Mendoza, Argentina</Title>
      <Wrapper>
        <ImageWrapper>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
        </ImageWrapper>
        <InfoWrapper />
      </Wrapper>
    </Container>
  )
}

export default Info

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  padding: 6rem 6rem;

  @media (max-width: 768px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 375px) {
    padding: 4rem 1rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  width: 50%;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 4rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
