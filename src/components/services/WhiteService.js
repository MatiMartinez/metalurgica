import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const WhiteService = () => {
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
      <RightWrapper>
        <ContentWrapper>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </ContentWrapper>
        <ContentWrapper>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
        </ContentWrapper>
      </RightWrapper>
      <LeftWrapper>
        <Title>
          Alternative <br /> Design
        </Title>
        <Line />
      </LeftWrapper>
    </Container>
  )
}

export default WhiteService

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  column-gap: 2rem;
  padding: 4rem 6rem;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 3rem;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`

const Line = styled.span`
  background-color: #f89d13;
  height: 3px;
  width: 3rem;
`

const RightWrapper = styled.div`
  display: flex;
  column-gap: 4rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: auto;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
`
