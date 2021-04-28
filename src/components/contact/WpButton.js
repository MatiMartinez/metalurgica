import React from "react"
import styled from "styled-components"

import { FaWhatsapp } from "react-icons/fa"

const WpButton = props => {
  const { link } = props
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size="1rem" color="#ffffff" />
      <Text>Abrir en WhatsApp</Text>
    </Container>
  )
}

export default WpButton

const Container = styled.a`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  background-color: #25d366;
  border-radius: 100px;
  z-index: 1;
`

const Text = styled.span`
  font-size: 1rem;
  font-weight: 300;
`
