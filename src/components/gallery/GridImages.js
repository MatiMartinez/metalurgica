import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const GridImages = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {data.images.nodes.map(image => (
        <ImageWrapper key={image.id}>
          <FakeImage fluid={image.childImageSharp.fluid} />
          <TextWrapper>
            <Title>Lorem ipsum</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell
              sed nibh dignissim, cursus tellus sit amet, ultrices mauris.
              Aliquam
            </Text>
          </TextWrapper>
        </ImageWrapper>
      ))}
    </Container>
  )
}

export default GridImages

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 4rem;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  :nth-child(3n + 2) {
    flex-direction: column-reverse;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 2rem;
  border: 1px solid #bfbfbf;
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

const FakeImage = styled(Image)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  height: 100%;
  width: auto;
`
