import React, { useState } from "react";

import SearchContext from "./context";

import Tabs from "./Tabs";

import { Container, Header, CallToAction } from "./styles";
import SearchForm from "./SearchForm";

export default function SearchBox() {
  const [searchType, setSearchType] = useState("car");

  return (
    <Container>
      <SearchContext.Provider value={{ searchType, setSearchType }}>
        <Header>
          <Tabs />
          <CallToAction href="#">
            Vender {searchType === "car" ? "meu Carro" : "minha Moto"}
          </CallToAction>
        </Header>
        <SearchForm />
      </SearchContext.Provider>
    </Container>
  );
}
