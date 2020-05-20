import React, { useState } from "react";

import { Label } from "../../../styles/form";
import { ClickArea, Container, OptionList, Option } from "./styles";

import PropTypes from "prop-types";

export default function Select({ label, placeHolder, options, onSelected }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(placeHolder);

  const onSelect = option => {
    setShowOptions(false);

    setSelected(option.Name || placeHolder);
    onSelected(option.ID || false);
  };

  return (
    <Container>
      <ClickArea onClick={() => setShowOptions(true)}>
        <Label>{label}:</Label>
        <span className="value">{selected}</span>
      </ClickArea>
      {showOptions && (
        <OptionList>
          <Option onClick={() => onSelect(false)}>{placeHolder}</Option>
          {options.map(option => (
            <Option onClick={() => onSelect(option)} key={option.ID}>
              {option.Name}
            </Option>
          ))}
        </OptionList>
      )}
    </Container>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelected: PropTypes.func.isRequired,
};
