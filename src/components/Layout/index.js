import React from "react";

import { Container } from "./styles";

import { Normalize } from "styled-normalize";
import GlobalStyles from "../../styles/global";

import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <Container>
      <Normalize />
      <GlobalStyles />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
