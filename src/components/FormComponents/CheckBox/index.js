import React, { useState } from "react";

import { Container, Box, Label } from "./styles";

export default function CheckBox({ label }) {
  const [selected, setSelected] = useState(true);

  return (
    <Container
      className={selected && "is-selected"}
      onClick={() => setSelected(!selected)}
    >
      <Box className="box" />
      <Label>{label}</Label>
    </Container>
  );
}
