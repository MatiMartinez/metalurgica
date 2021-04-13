import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Navegation from "./Navegation"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navegation />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  padding-top: 100px;
`
