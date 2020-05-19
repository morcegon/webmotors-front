import React from "react";

import { Container } from "./styles";
import { Row, Column } from "../../../styles/grid";
import { Field, Label, Select } from "../../../styles/form";
import CheckBox from "../../FormComponents/CheckBox";

import { FiMapPin } from "react-icons/fi";

export default function SearchForm() {
  return (
    <Container>
      <Row>
        <Column size={2}>
          <CheckBox label="Novos" />
        </Column>
        <Column size={2}>
          <CheckBox label="Usados" />
        </Column>
      </Row>

      <Row>
        <Column size={6}>
          <Field>
            <FiMapPin />
            <Label>Onde:</Label>
            <input type="text" className="input" value="Brasil" />
          </Field>
        </Column>

        <Column size={3}>
          <Field>
            <Select>
              <Label>Marca</Label>
              <span className="value">Todas</span>
            </Select>
          </Field>
        </Column>
      </Row>
    </Container>
  );
}
