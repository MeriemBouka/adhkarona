import React from "react";
import backgroundFooter from "../assets/footer.png";
import styled from "styled-components";

const FooterBackground = styled.img`
  width: 100%;
  margin-bottom: -20px;
  pointer-events: none;
`;
const FooterContainer = styled.footer`
  margin-left: -8px;
  margin-right: -8px;
  margin-top: 100px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBackground src={backgroundFooter} alt="footer-image" />
    </FooterContainer>
  );
}
