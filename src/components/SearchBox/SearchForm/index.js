import React, { useState, useCallback, useEffect } from "react";

import { Container } from "./styles";
import { Row, Column } from "../../../styles/grid";
import { Field, Label } from "../../../styles/form";
import CheckBox from "../../FormComponents/CheckBox";

import { getMakes, getModels } from "../../../services/api";

import { FiMapPin } from "react-icons/fi";
import Select from "../../FormComponents/Select";

export default function SearchForm() {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState(null);

  const fetchMakes = useCallback(async () => {
    const resp = await getMakes();
    setMakes(resp);
  }, []);

  const fetchModel = useCallback(async makeId => {
    const resp = await getModels(makeId);
    console.log(resp);
    setModels(resp);
  }, []);

  useEffect(() => {
    fetchMakes();
  }, [fetchMakes]);

  useEffect(() => {
    if (selectedMake) {
      fetchModel(selectedMake);
    }
  }, [fetchModel, selectedMake]);

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
            <Select
              label="Marca"
              placeHolder="Todas"
              options={makes}
              onSelected={setSelectedMake}
            />
          </Field>
        </Column>

        <Column size={3}>
          <Field>
            <Select
              label="Modelo"
              placeHolder="Todos"
              options={models}
              onSelected={setSelectedMake}
              disabled={models.length === 0}
            />
          </Field>
        </Column>
      </Row>
    </Container>
  );
}
