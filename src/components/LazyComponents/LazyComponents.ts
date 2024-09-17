import React from "react";

export const Header = React.lazy(() =>
  import("@components/Header/Header").then((module) => ({
    default: module.Header,
  }))
);

export const Footer = React.lazy(() =>
  import("@components/Footer/Footer").then((module) => ({
    default: module.Footer,
  }))
);
