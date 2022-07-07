import * as React from "react"
import styled, { keyframes } from "styled-components"
import FadeInDown from "@bit/formidablelabs.react-animations.fade-in-down"
import { email } from "../config"
import Sidebar from "./sidebar"
import FadeIn from "react-fade-in"
const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  @media (max-width: 900px) {
    display: none;
  }
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--green);
  }
  a {
    font-family: var(--font-roboto);
    opacity: 0.75;
    margin: 20px auto;
    padding: 10px;
    font-size: var(--fz-xxs);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    :hover {
      color: var(--green);
    }
  }
`

const Email = () => (
  <Sidebar orientation="right">
    <FadeIn transitionDuration="500" delay="500">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
    </FadeIn>
  </Sidebar>
)

export default Email
