import React from "react";
import { FooterContainer, FooterText } from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer
      aria-label="Rodapé com informações do projeto e autor"
      role="contentinfo"
      data-testid="footer">
      <FooterText>Sensedia Frontend Challenge - Lucas Barros</FooterText>
    </FooterContainer>
  );
};
