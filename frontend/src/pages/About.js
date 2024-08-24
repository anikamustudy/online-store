// About.js
import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
`;

function About() {
  return (
    <AboutSection>
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>This is about</AboutContent>
    </AboutSection>
  );
}

export default About;
