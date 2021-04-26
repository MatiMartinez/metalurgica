import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { FaAngleRight } from "react-icons/fa"

const Navegation = () => {
  // STATE
  const [scroll, setScroll] = useState(false)

  // EFFECTS
  useEffect(() => {
    function changeNav() {
      if (window.scrollY >= 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  // RETURN
  return (
    <Header scroll={scroll}>
      <h1>LOGO</h1>
      <Nav>
        <NavLink to="/">INICIO</NavLink>
        <NavLink to="/gallery">GALERÍA</NavLink>
        <NavLink to="/services">NUESTROS SERVICIOS</NavLink>
        <ContactLinkWrapper>
          <FaAngleRight size="1.25rem" color="#8f1d14" />
          <ContactLink to="/contact">CONTACTO</ContactLink>
        </ContactLinkWrapper>
      </Nav>
    </Header>
  )
}

export default Navegation

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: 0.5s all ease;
  background-color: ${props => (props.scroll ? "#ffffff" : "#ffffff")};
  height: ${props => (props.scroll ? "80px" : "100px")};
  box-shadow: ${props =>
    props.scroll ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none"};

  @media (max-width: 768px) {
    padding: 0 4rem;
  }

  @media (max-width: 576px) {
    padding: 0 2rem;
  }

  @media (max-width: 375px) {
    padding: 0 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
`

const NavLink = styled(Link)`
  font-size: 1rem;
  cursor: pointer;
  color: #222222;

  :hover {
    color: #8f1d14;
  }
`

const ContactLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

const ContactLink = styled(Link)`
  font-size: 1.25rem;
  cursor: pointer;
  color: #222222;

  :hover {
    color: #8f1d14;
  }
`
