import React from "react"
import styled from "styled-components"

import { ImUser } from "react-icons/im"

const InfoWrapper = () => {
  return (
    <Container>
      <Title>Información de Contacto</Title>
      <ContactWrapper>
        <ImUser size="3rem" />
        <ContactInfoWrapper>
          <ContactUser>Matias Martinez</ContactUser>
          <ContactText>2634 622209</ContactText>
        </ContactInfoWrapper>
      </ContactWrapper>
    </Container>
  )
}

export default InfoWrapper

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
  padding: 0 2rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

const ContactUser = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
`

const ContactText = styled.span`
  font-size: 1rem;
  font-weight: 300;
`
