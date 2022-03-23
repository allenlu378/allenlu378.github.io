import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Scrollspy from "react-scrollspy"
import {links} from '../config.js'
import resume from "../images/Allen Lu - Resume.pdf"

const StyledNav = styled.div`
  
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
position: fixed;
top: 0px;
z-index: 11;
padding: 0px 50px;
width: 100%;
height: var(--nav-height);
background-color: rgba(10, 25, 47, 0.85);
backdrop-filter: blur(10px);
transition: var(--transition);
filter: none !important;
pointer-events: auto !important;
user-select: auto !important;
`
const StyledLinks = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
    @media (max-width: 1080px) {
      background-color: red;
      position: absolute;
      color: white;
      margin-top: 32px;
      display: block;
      top: 0;
      right: 0;
      text-align: right;
      li {
        padding-right: 8px;
      }
      &:before {
        display: none;
      }
    }
    &:before {
      content: "";
      width: 63rem;
      background-color: black;
      margin-right: 24px;
    }
    li a::before {
      
      content: "0" counter(item) ".";
      margin-right: 5px;
      color: var(--green);
      font-size: var(--fz-xxs);
      text-align: right;
    }
    li {
      counter-increment: item;
      margin: 0 24px;
      font-size: 13px;
      opacity: 1;
      @media (max-width: 1080px) {
        background-color: red;
        &:not(:first-child) {
          margin-top: 12px;
        }
      }
    }
    .nav__item--active {
      border-bottom: 2px solid black !important;
      opacity: 1;
      @media (max-width: 1080px) {
        border-bottom: 2px solid transparent !important;
        border-right: 2px solid white !important;
      }
    }
    .item {
      color: white;
      list-style-type: none;
      a:hover{
        color: var(--green)
      }
      justify-content: center;
      align-items: center;
    }
    .inner {
      display: flex;
      margin:0;
      padding: 0;
      @media (max-width: 1080px) {
        flex-direction: column;
      }
    .resume-button {
        color: var(--green);
        background-color: transparent;
        border: 1px solid var(--green);
        border-radius: var(--border-radius);
        padding: 0.75rem 1rem;
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
        margin-left: 15px;
        font-size: var(--fz-xs);
        :hover{
          background-color:var(--green-tint);
        }
      }
    }
`
const StyledButton = styled.div`
  display: block; 

`
const navbar = () => {return (
  <StyledNav>
    <StyledLinks>
      <Scrollspy 
        items={["about", "jobs", "projects", "contact"]}
        currentClassName="nav__item--active"
        className="inner"
      >
        {links.map(({ url, name }, i) => (
                    <li key={i} className="item">
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
        <StyledButton>
          <a className="resume-button" target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
        </StyledButton>
        
          
      </Scrollspy>
    </StyledLinks>

  </StyledNav>
  
)}

export default navbar
