import React from "react"
import styled from "styled-components"
import {email} from "../../config"

const StyledContactSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: center;
    min-height: 25vh;
    padding: 0px;
    counter-increment: section 1;
}
  .big-heading{
      font-size: var(--fz-xxl)
  }
  h1::before{
      content: "0" counter(section) ".";
  }
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-xl));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 0px 2px;
    }
  }
  h2 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
    font-size: var(--fz-sm);
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
    font-famil: var(--font-mono);
  }
  .special{
    color: var(--green);
  }
  a{
    pointer-events: auto !important;
    user-select: auto !important;
  }
`;
const Contact = () => {
    return (
      <StyledContactSection id="contact">
          <h1> Contact Me!</h1>
          <h2>I'm always open to new opportunities so come <a className="special" href={`mailto:${email}`}> say hi!</a></h2>
      </StyledContactSection>
    )
  }
  
  export default Contact
