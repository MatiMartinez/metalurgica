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
      <Title>
        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum,
        molestie nostra sollicitudin
      </Title>
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
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  width: 50%;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4rem;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const FakeImg = styled(Image)`
  width: 500px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
