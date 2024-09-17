import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { Users } from "@pages/Users/Users";

export const RoutesConfig: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Users />
        </Layout>
      }
    />
  </Routes>
);
