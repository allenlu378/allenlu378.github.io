import React from "react"
import styled from "styled-components"
import { socialMedia } from "../config.js"
import Sidebar from "./sidebar"
import { Icon } from "../components/icons"
import FadeIn from "react-fade-in"

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
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
  li {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
      opactiy: 1;
      :hover {
        color: var(--green);
      }
    }
  }
`

const Social = () => (
  <Sidebar orientation="left">
    <FadeIn transitionDuration="500" delay="500">
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a
                href={url}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </FadeIn>
  </Sidebar>
)

export default Social
