import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 cloth store. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
