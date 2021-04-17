import React from "react"
import styled from "styled-components"

const ContactCard = props => {
  const { name, location, phone } = props

  return (
    <Container>
      <Name>{name}</Name>
      <Location>{location}</Location>
      <Phone>{phone}</Phone>
    </Container>
  )
}

export default ContactCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: #f89d13;
  margin-bottom: 0.5rem;
`

const Location = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #e6dedd;
`

const Phone = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #e6dedd;
`
