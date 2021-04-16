import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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
    <Contianer>
      <LeftWrapper>
        <Title>Lorem ipsum</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text>
        <ToServiceButton>Lorem ipsum dolor</ToServiceButton>
      </LeftWrapper>
      <RightWrapper>
        <FakeImg fluid={data.bg.childImageSharp.fluid} />
      </RightWrapper>
    </Contianer>
  )
}

export default Hero

const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 12rem;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`

const Text = styled.p`
  font-size: 1rem;
  width: 50%;
`

const ToServiceButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: max-content;
  border: 1px solid #222222;
  background-color: transparent;
  cursor: pointer;
`

const RightWrapper = styled.div`
  display: flex;
  width: 100%;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: auto;
`
