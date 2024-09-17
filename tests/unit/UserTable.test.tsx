import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { UserTable } from "../../src/components/UserTable/UserTable";
import { mockUsers } from "../../__mocks__/mockUsers";

describe("UserTable Component", () => {
  it("should render the user table with correct headers", () => {
    render(<UserTable users={mockUsers} />);
    expect(screen.getByTestId("header-name")).toHaveTextContent("Nome");
    expect(screen.getByTestId("header-email")).toHaveTextContent("Email");
    expect(screen.getByTestId("header-phone")).toHaveTextContent("Telefone");
  });

  it("should display user data correctly", () => {
    render(<UserTable users={mockUsers} />);

    expect(screen.getByTestId("cell-name-1")).toHaveTextContent("Lucas Barros");
    expect(screen.getByTestId("cell-email-1")).toHaveTextContent(
      "lucas.barros@test.com"
    );
    expect(screen.getByTestId("cell-phone-1")).toHaveTextContent(
      "12-3456-7890"
    );

    expect(screen.getByTestId("cell-name-2")).toHaveTextContent(
      "Beatriz Barbosa"
    );
    expect(screen.getByTestId("cell-email-2")).toHaveTextContent(
      "beatriz.barbosa@test.com"
    );
    expect(screen.getByTestId("cell-phone-2")).toHaveTextContent(
      "98-7654-3210"
    );
  });

  it("should have the correct aria-label for accessibility", () => {
    render(<UserTable users={mockUsers} />);
    const table = screen.getByTestId("user-table");
    expect(table).toHaveAttribute("aria-label", "Tabela de usuários");
  });
});
