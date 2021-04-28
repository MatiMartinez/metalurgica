import React from "react"
import styled from "styled-components"
import WpButton from "./WpButton"

const ContactCard = props => {
  const { name, phone, link } = props

  return (
    <Container>
      <BgWrapper />
      <Name>{name}</Name>
      <Phone>{phone}</Phone>
      <WpButton link={link} />
    </Container>
  )
}

export default ContactCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 2rem;
  position: relative;
  z-index: 1;
  color: #ffffff;
`

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1b120f;
  opacity: 0.5;
`

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 1;
`

const Phone = styled.span`
  font-size: 1rem;
  font-weight: 400;
  z-index: 1;
`
