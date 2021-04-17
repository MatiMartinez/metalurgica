import React from "react"
import styled from "styled-components"

import InfoContact from "./InfoContact"

const MainContact = () => {
  return (
    <Container>
      <LeftWrapper>
        <TitleWrapper>
          <SecondaryTitle>Tienes alguna</SecondaryTitle>
          <MainTitle>consulta ?</MainTitle>
        </TitleWrapper>
        <InfoContact />
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </Container>
  )
}

export default MainContact

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`

const LeftWrapper = styled.div``

const TitleWrapper = styled.div`
  padding: 4rem 0 4rem 6rem;
`

const SecondaryTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #e6dedd;
`

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`

const RightWrapper = styled.div``
