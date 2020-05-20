import React from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";

export default function App() {
  return (
    <Layout>
      <Header />
      <SearchBox />
    </Layout>
  );
}
