/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Nav, Email, Social, Footer } from "../components"
import "./layout.css"
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';



const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <StyledContent>
            <Nav/>
            <Social/>
            <Email/>
            <div>{children}</div>
            <Footer/>
          </StyledContent>
        </ThemeProvider>
      </div>
      
    </>
  )
}


export default Layout
