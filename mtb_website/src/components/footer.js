import * as React from "react"
import styled, {keyframes} from "styled-components"

const StyledFooter = styled.div`
${({ theme }) => theme.mixins.flexCenter};
flex-direction: column;
height: auto;
min-height: 70px;
padding: 15px;
text-align: center;
color: var(--green);
font-family: var(--font-mono);
font-size: var(--fz-xxs);
pointer-events: auto !important;
`;

const Footer = () => (
    <StyledFooter>
        <a href = "https://github.com/allenlu378">
            <div>Built by Allen Lu</div>
        </a>
    </StyledFooter>
)

export default Footer