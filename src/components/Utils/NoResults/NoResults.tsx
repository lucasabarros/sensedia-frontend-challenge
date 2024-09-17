import React from "react";
import { NoResultsProps } from "./NoResults.types";
import { Message } from "./NoResults.styles";

export const NoResults: React.FC<NoResultsProps> = ({
  message = "Não encontrou resultados",
}) => {
  return <Message data-testid="no-results">{message}</Message>;
};
