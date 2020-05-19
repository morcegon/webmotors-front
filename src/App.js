import React from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";

import "./assets/scss/global.scss";

export default function App() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}
