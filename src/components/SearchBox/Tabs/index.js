import React, { useState } from "react";

import { Container, Tab, Icon, Label } from "./styles";

import { ReactComponent as CarIcon } from "../../../assets/images/car_icon_gray.svg";
import { ReactComponent as BikeIcon } from "../../../assets/images/bike_icon_gray.svg";

export default function Tabs() {
  const [tabSelected, setTabSelected] = useState("car");

  const tabs = [
    {
      name: "car",
      label: "Carros",
      icon: <CarIcon />,
    },
    {
      name: "cycle",
      label: "Motos",
      icon: <BikeIcon />,
    },
  ];

  const setUpTabs = () =>
    tabs.map(tab => {
      return (
        <Tab
          key={tab.name}
          className={`${tabSelected === tab.name ? "is-active" : ""}`}
          onClick={() => setTabSelected(tab.name)}
        >
          <Icon>{tab.icon}</Icon>
          <Label className="label">
            <small>Comprar</small>
            <strong>{tab.label}</strong>
          </Label>
        </Tab>
      );
    });

  return <Container>{setUpTabs()}</Container>;
}
