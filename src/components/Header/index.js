import React from "react";

import { Container, Logo } from "./styles";

import headerLogo from "../../assets/images/webmotors.svg";

function Header() {
  return (
    <Container>
      <Logo className="logo">
        <img src={headerLogo} alt="Webmotors" />
      </Logo>
    </Container>
  );
}

export default Header;
