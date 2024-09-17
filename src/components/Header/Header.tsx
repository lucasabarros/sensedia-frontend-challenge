import React from "react";
import { HeaderContainer, Logo } from "./Header.styles";
import logo from "@assets/img/logo-sensedia.svg";

export const Header: React.FC = () => {
  return (
    <HeaderContainer
      aria-label="Cabeçalho com logo da Sensedia"
      role="banner"
      data-testid="header">
      <Logo src={logo} alt="Logo da Sensedia" data-testid="logo" />
    </HeaderContainer>
  );
};
