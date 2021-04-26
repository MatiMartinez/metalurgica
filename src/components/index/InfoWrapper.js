import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { AiOutlineDoubleRight } from "react-icons/ai"

const InfoWrapper = () => {
  return (
    <Container>
      <IntroTitle>Sergio Davila e Hijos</IntroTitle>
      <Title>Nuestros Servicios</Title>
      <Text>
        Nos hemos establecido en el negocio desde ya hace varios años, aunque
        hemos servido a un gran número de clientes durante ese tiempo, cada
        trabajo es un nuevo desafío para nosotros y nos encantaría ayudarte de
        la mejor manera. ¡No dudes en contactarnos!
      </Text>
      <ToServiceButton to="/services">
        Nuestros Servicios <AiOutlineDoubleRight />
      </ToServiceButton>
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
  transition: all 0.5s ease;

  :hover,
  :focus {
    box-shadow: inset 190px 0 0 0 #e6dedd;
  }
`
