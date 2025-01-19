import { useState, FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../routes/layout.tsx";
import Routes from "../routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
