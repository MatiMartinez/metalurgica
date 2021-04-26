import React from "react"
import styled from "styled-components"

import { FaWhatsapp } from "react-icons/fa"

const Whatsapp = () => {
  return (
    <WhatsappWrapper>
      <FaWhatsapp size="3rem" color="#ffffff" />
    </WhatsappWrapper>
  )
}

export default Whatsapp

const WhatsappWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #25d366;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 9999;

  :hover {
    bottom: 1.5rem;
  }
`
