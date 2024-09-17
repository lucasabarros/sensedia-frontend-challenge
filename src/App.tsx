import React from "react";
import { Helmet } from "react-helmet-async";
import { RoutesConfig } from "@router/routes";

export const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sensedia Frontend Challenge</title>
        <link
          rel="shortcut icon"
          href="/icons/favicon.svg"
          type="image/svg+xml"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <RoutesConfig />
    </>
  );
};
