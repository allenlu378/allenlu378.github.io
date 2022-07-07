import React from "react"
import { Layout, Home, About, Jobs, Contact } from "../components"
import styled from "styled-components"
import { GlobalStyle, theme } from "../styles"

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0vh 15vmax;
  align-items: center;
  overflow: hidden;
`

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Home />
        <About />
        <Jobs />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage
