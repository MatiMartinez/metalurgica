import React from "react"
import styled from "styled-components"

import { CgPhone } from "react-icons/cg"

const Feet = () => {
  return (
    <Footer>
      <LeftWrapper></LeftWrapper>
      <RightWrapper>
        <CgPhone size="2rem" />
        <Title>Contáctanos</Title>
        <Text>(261) 5695321, Matias</Text>
        <Text>(261) 5966389, Jorge</Text>
        <Text>Mendoza, Argentina</Text>
      </RightWrapper>
    </Footer>
  )
}

export default Feet

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem;
  background-color: #222222;
  color: #e6dedd;
`

const LeftWrapper = styled.div``

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 0.5rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

const Text = styled.span`
  font-size: 1rem;
  font-weight: 400;
`
