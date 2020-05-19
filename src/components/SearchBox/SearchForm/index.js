import React from "react";

import { Container } from "./styles";
import CheckBox from "../../FormComponents/CheckBox";

function SearchForm() {
  return (
    <Container>
      <div className="row">
        <div className="col-2">
          <CheckBox label="Novos" />
        </div>
        <CheckBox label="Usados" />
      </div>
    </Container>
  );
}

export default SearchForm;
