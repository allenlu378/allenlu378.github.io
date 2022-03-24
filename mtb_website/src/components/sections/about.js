import React from "react"
import styled, {keyframes} from "styled-components"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FadeIn from 'react-fade-in';
import { StaticImage } from 'gatsby-plugin-image';


const StyledAboutSection = styled.section`  
  h2::before{
      content: "0" counter(section) ".";
  }
  max-width: 900px;
  min-height: 85vh;
  counter-increment: section 1;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
  h2{
    font-family: var(--font-mono);
    color: var(--green);
    font-weight: 400;
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        top: 6px;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;

      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const skills = ['JavaScript', 'Python', 'React', 'Node.js', 'Java', 'C'];
    return (
        <StyledAboutSection id="about">
          <h2 className="numbered-heading"> About Me</h2>
    
          <div className="inner">
            <StyledText>
              <div>
                <p>
                  Hello! Some crap about me 
                </p>
    
                <p>
                  Other than software development, some of my hobbies are playing and watching sports, 
                  gaming, eating, and exploring!
                </p>
    
    
                <p>Here are a few languages that I am proficient in and have used recently:</p>
              </div>
    
              <ul className="skills-list">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </StyledText>
    
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/aboutpic.jpeg"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Headshot"
                />
              </div>
            </StyledPic>
          </div>
        </StyledAboutSection>
      );
    }
    export default About