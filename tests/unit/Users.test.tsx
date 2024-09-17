import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Users } from "../../src/pages/Users/Users";
import { useUsers } from "../../src/pages/Users/Users.hooks";
import { MemoryRouter } from "react-router-dom";
import { mockUsers } from "../../__mocks__/mockUsers";

jest.mock("../../src/pages/Users/Users.hooks", () => ({
  useUsers: jest.fn(),
}));

describe("Users Page", () => {
  const mockUseUsers = {
    view: "card",
    search: "",
    isLoading: false,
    inputRef: null,
    filteredUsers: mockUsers,
    handleViewChange: jest.fn(),
    setSearch: jest.fn(),
    error: null,
    closeErrorNotification: jest.fn(),
  };

  beforeEach(() => {
    (useUsers as jest.Mock).mockReturnValue(mockUseUsers);
  });

  test("should render the Users page and main components", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByText("Lista de Usuários")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A lista exibe informações de usuários obtidas a partir de uma API pública, permitindo fácil visualização e consulta dos dados."
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("card-view")).toBeInTheDocument();
  });

  test("should switch between card and table view", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const switchButton = screen.getByTestId("view-switch-button");

    expect(switchButton).toHaveTextContent("Tabela");
    fireEvent.click(switchButton);
    expect(mockUseUsers.handleViewChange).toHaveBeenCalled();
  });

  test("should filter users correctly when typing in the search input", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Leanne" } });
    expect(mockUseUsers.setSearch).toHaveBeenCalledWith("Leanne");
  });

  test("should show NoResults component when no users match the search", () => {
    (useUsers as jest.Mock).mockReturnValue({
      ...mockUseUsers,
      filteredUsers: [],
    });

    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByTestId("no-results")).toBeInTheDocument();
  });

  test("should show loading spinner when data is being fetched", () => {
    (useUsers as jest.Mock).mockReturnValue({
      ...mockUseUsers,
      isLoading: true,
    });

    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });
});
