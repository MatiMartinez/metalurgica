import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "./layout.css"
import Navegation from "./Navegation"
import Feet from "./Feet"
import Whatsapp from "./Whatsapp"

const Layout = ({ children }) => {
  return (
    <>
      <Navegation />
      <Main>{children}</Main>
      <Feet />
      <Whatsapp />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  padding-top: 100px;
  padding-bottom: 50px;
`
