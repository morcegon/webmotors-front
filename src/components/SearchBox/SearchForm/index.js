import React, { useState, useCallback, useEffect } from "react";

import { AdvancedSearch, ClearFilters, Container, GetOffers } from "./styles";
import { Row, Column } from "../../../styles/grid";
import { Field, Label } from "../../../styles/form";
import CheckBox from "../../FormComponents/CheckBox";

import { getMakes, getModels, getVersions } from "../../../services/api";

import { FiMapPin } from "react-icons/fi";
import Select from "../../FormComponents/Select";

export default function SearchForm() {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);

  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);

  const years = [
    {
      ID: 2020,
      Name: 2020,
    },
    {
      ID: 2019,
      Name: 2020,
    },
    {
      ID: 2018,
      Name: 2020,
    },
  ];

  const prices = [
    {
      ID: 100000,
      Name: "Até R$ 100.000",
    },
    {
      ID: 50000,
      Name: "Até R$ 50.000",
    },
    {
      ID: 30000,
      Name: "Até R$ 30.000",
    },
  ];

  const fetchMakes = useCallback(async () => {
    const resp = await getMakes();
    setMakes(resp);
  }, []);

  const fetchModel = useCallback(async makeId => {
    const resp = await getModels(makeId);
    setModels(resp);
  }, []);

  const fetchVersion = useCallback(async modelId => {
    const resp = await getVersions(modelId);
    setVersions(resp);
  }, []);

  const clearFilters = () => {
    setModels([]);
    setVersions([]);
    setSelectedMake(false);
    setSelectedVersion(false);
  };

  useEffect(() => {
    fetchMakes();
  }, [fetchMakes]);

  useEffect(() => {
    if (selectedMake) {
      fetchModel(selectedMake);
    }
  }, [fetchModel, selectedMake]);

  useEffect(() => {
    if (selectedModel) {
      fetchVersion(selectedModel);
    }
  }, [fetchVersion, selectedModel]);

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
              onSelected={setSelectedModel}
              disabled={models.length === 0}
            />
          </Field>
        </Column>
      </Row>

      <Row>
        <Column size={3}>
          <Field>
            <Select placeHolder="Ano desejado" options={years} />
          </Field>
        </Column>

        <Column size={3}>
          <Field>
            <Select placeHolder="Faixa de preço" options={prices} />
          </Field>
        </Column>

        <Column size={6}>
          <Field>
            <Select
              label="Versão"
              placeHolder="Todas"
              options={versions}
              onSelected={setSelectedVersion}
              disabled={versions.length === 0}
            />
          </Field>
        </Column>
      </Row>

      <Row>
        <Column size={6}>
          <AdvancedSearch href="#">Busca Avançada</AdvancedSearch>
        </Column>

        <Column size={2}>
          <ClearFilters onClick={() => clearFilters()}>
            Limpar Filtros
          </ClearFilters>
        </Column>

        <Column size={4}>
          <GetOffers>Ver Ofertas</GetOffers>
        </Column>
      </Row>
    </Container>
  );
}
