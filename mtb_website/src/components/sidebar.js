import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, {keyframes} from "styled-components"
import Scrollspy from "react-scrollspy"
import {links} from '../config.js'
import resume from "../images/Allen Lu - Resume.pdf"
import FadeInDown from "@bit/formidablelabs.react-animations.fade-in-down";
const FadeInDownAnimation = keyframes`${FadeInDown}`;
const FadeInDownDiv = styled.div`
  animation: 1s ${FadeInDownAnimation};
  display:flex;
  
`;
const StyledSideElement = styled.div`
 
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
`

const Sidebar = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation}>
      {children}
    </StyledSideElement>
  )
}

export default Sidebar

