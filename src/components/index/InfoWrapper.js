import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { BiChevronRight } from "react-icons/bi"

const InfoWrapper = () => {
  return (
    <Container>
      <IntroTitle>Established MMXVIII</IntroTitle>
      <Title>Interior Design Firm Based in New York</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum,
        molestie nostra sollicitudin cubilia taciti ut ultricies bibendum,
        turpis consequat a volutpat fusce elementum pretium. Eleifend tempus
        tempor duis ac gravida fermentum auctor, lorem ipsum dolor sit amet
        consectetur adipiscing elit interdum, molestie nostra sollicitudin
        cubilia taciti ut ultricies bibendum, turpis consequat a volutpat fusce
        elementum pretium. Eleifend tempus tempor duis ac gravida fermentum
        auctor.
      </Text>
      <FakeButton>
        Saber Más <BiChevronRight />
      </FakeButton>
    </Container>
  )
}

export default InfoWrapper

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const IntroTitle = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const FakeButton = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: max-content;
  border: 1px solid #222222;
  background-color: transparent;
  cursor: pointer;
`
