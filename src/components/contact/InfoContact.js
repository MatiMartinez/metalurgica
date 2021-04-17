import React from "react"
import styled from "styled-components"
import ContactCard from "./ContactCard"

const InfoContact = () => {
  return (
    <Container>
      <ContactCard
        name="Matias Martinez"
        location="Godoy Cruz, Mendoza"
        phone="261 62225896"
      />
      <ContactCard
        name="Matias Martinez"
        location="Godoy Cruz, Mendoza"
        phone="261 62225896"
      />
      <ContactCard
        name="Matias Martinez"
        location="Godoy Cruz, Mendoza"
        phone="261 62225896"
      />
      <ContactCard
        name="Matias Martinez"
        location="Godoy Cruz, Mendoza"
        phone="261 62225896"
      />
    </Container>
  )
}

export default InfoContact

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3rem;
  padding: 4rem 6rem;
  background-color: #222222;
`
