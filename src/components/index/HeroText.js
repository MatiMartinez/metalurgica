import React from "react"
import styled from "styled-components"

const HeroText = () => {
  return (
    <Container>
      <Title>Soluciones definitivas para nuestros clientes</Title>
      <Text>
        Somos una empresa familiar especializada en la construcción, reparación,
        impermeabilización y mantenimiento de techos en general. También
        ofrecemos una amplia variedad en servicios de metalúrgica.
      </Text>
    </Container>
  )
}

export default HeroText

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 40%;
  z-index: 1;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  color: #ffffff;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-indent: 2rem;
`
