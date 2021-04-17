import React from "react"
import styled from "styled-components"

const HeroText = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet consectetur</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum,
        molestie nostra sollicitudin cubilia taciti ut ultricies bibendum,
        turpis consequat a volutpat fusce elementum pretium. Eleifend tempus
        tempor duis ac gravida fermentum auctor.
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
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`
