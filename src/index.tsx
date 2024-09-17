import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";
import { GlobalStyles } from "@styles/index";
import { UserProvider } from "@contexts/UserContext/UserContext";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <GlobalStyles />
          <App />
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
);
