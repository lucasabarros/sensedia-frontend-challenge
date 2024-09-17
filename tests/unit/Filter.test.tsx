import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Filter } from "../../src/components/Filter/Filter";

describe("Filter Component", () => {
  let mockOnChange: jest.Mock;
  let inputRef: React.RefObject<HTMLInputElement>;

  beforeEach(() => {
    mockOnChange = jest.fn();
    inputRef = React.createRef();
  });

  it("should render the input field correctly", () => {
    render(<Filter value="" onChange={mockOnChange} inputRef={inputRef} />);

    const inputElement = screen.getByTestId("search-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute(
      "placeholder",
      "Pesquise por nome de usuário"
    );
    expect(inputElement).toHaveAttribute(
      "aria-label",
      "Campo de filtro de usuários"
    );
  });

  it("should call onChange when typing in the input field", () => {
    render(<Filter value="" onChange={mockOnChange} inputRef={inputRef} />);

    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, { target: { value: "Lucas" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("Lucas");
  });

  it("should update the input value when typing", () => {
    render(
      <Filter value="Lucas" onChange={mockOnChange} inputRef={inputRef} />
    );

    const inputElement = screen.getByTestId("search-input");
    expect(inputElement).toHaveValue("Lucas");

    fireEvent.change(inputElement, { target: { value: "Lucas Barros" } });
    expect(mockOnChange).toHaveBeenCalledWith("Lucas Barros");
  });

  it("should forward the ref to the input field", () => {
    render(<Filter value="" onChange={mockOnChange} inputRef={inputRef} />);
    expect(inputRef.current).toBe(screen.getByTestId("search-input"));
  });
});
