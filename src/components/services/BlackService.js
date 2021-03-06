import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const BlackService = () => {
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
    <Container id="services">
      <LeftWrapper>
        <Title>
          Techos
          <br /> Servicios
        </Title>
        <Line />
      </LeftWrapper>
      <RightWrapper>
        <ContentWrapper>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
          <TitleText>Techos de Teja</TitleText>
          <Text>
            Colocación, mantenimiento y control de disversos estilos de tejas
          </Text>
        </ContentWrapper>
        <ContentWrapper>
          <TitleText>Techos de Chapa</TitleText>
          <Text>
            Colocación de chapas para techos y galpones, Trapezoidal, Acanalada
          </Text>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
        </ContentWrapper>
      </RightWrapper>
    </Container>
  )
}

export default BlackService

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  column-gap: 2rem;
  padding: 4rem 6rem;
  background-color: #222222;
  color: #ffffff;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: auto;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const TitleText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`
