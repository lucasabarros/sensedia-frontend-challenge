import React from "react";
import { StyledSearchField } from "./Filter.styles";
import { FilterProps } from "./Filter.types";
import { useFilter } from "./Filter.hooks";
import { Input } from "react-aria-components";

export const Filter: React.FC<FilterProps> = ({
  value,
  onChange,
  inputRef,
}) => {
  const { inputValue, handleInputChange } = useFilter(value, onChange);

  return (
    <StyledSearchField aria-label="Campo de filtro de usuários">
      <Input
        id="search-input"
        ref={inputRef}
        placeholder="Pesquise por nome de usuário"
        aria-label="Campo de filtro de usuários"
        data-testid="search-input"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </StyledSearchField>
  );
};
