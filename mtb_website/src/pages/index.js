import React from "react"
import { Layout, Home, Contact } from "../components"
import styled from "styled-components"
import { GlobalStyle, theme } from '../styles';


const StyledMainContainer = styled.main`
    counter-reset: section;
    padding: 0vh 15vmax;
    align-items: center;
`

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Home/>
        <Contact/>
      </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage