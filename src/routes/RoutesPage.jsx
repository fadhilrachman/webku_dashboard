import React from "react";
import Layout from "../components/Layout";
import { Route, Routes } from "react-router-dom";
import listRoutes from "./listRoutes";
const RoutesPage = () => {
  return (
    <Layout>
      <Routes>
        {listRoutes.map((val) => (
          <Route path={val.path} element={val.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default RoutesPage;
