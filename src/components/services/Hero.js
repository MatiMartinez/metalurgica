import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { Link } from "react-scroll"

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
        <Title>Metalúrgica & Techos</Title>
        <Text>
          Ofrecemos una gran variedad de productos, trabajando con proveedores
          de materia prima de alta calidad con tecnología de vanguardia.
        </Text>
        <ToServiceButton
          to="services"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <TextButton>Ver Servicios</TextButton>
          <AiOutlineDoubleRight />
        </ToServiceButton>
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
  padding: 6rem 12rem;
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
  width: 70%;
`

const ToServiceButton = styled(Link)`
  font-weight: 700;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: max-content;
  border: 2px solid #222222;
  background-color: transparent;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.5s ease;

  :hover,
  :focus {
    box-shadow: inset 150px 0 0 0 #e6dedd;
  }
`

const TextButton = styled.span`
  font-size: 1rem;
  font-weight: 700;
`

const RightWrapper = styled.div`
  display: flex;
  width: 100%;
`

const FakeImg = styled(Image)`
  width: 100%;
  height: auto;
`
