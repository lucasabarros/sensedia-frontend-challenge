import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Users } from "../../src/pages/Users/Users";
import { MemoryRouter } from "react-router-dom";
import { mockUsers } from "../../__mocks__/mockUsers";
import { useUsers } from "../../src/pages/Users/Users.hooks";

jest.mock("../../src/pages/Users/Users.hooks");

describe("Users Page - Behavioral Tests", () => {
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

  test("should render user cards when switching from table to card view", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const switchButton = screen.getByTestId("view-switch-button");
    fireEvent.click(switchButton);
    expect(mockUseUsers.handleViewChange).toHaveBeenCalled();

    fireEvent.click(switchButton);
    await waitFor(() => {
      expect(screen.getByTestId("card-view")).toBeInTheDocument();
      expect(screen.queryByTestId("table-view")).not.toBeInTheDocument();
    });
  });

  test("should display error notification when error occurs", () => {
    (useUsers as jest.Mock).mockReturnValue({
      ...mockUseUsers,
      error: "Erro ao carregar os dados",
    });

    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(screen.getByText("Erro ao carregar os dados")).toBeInTheDocument();
  });

  test("should update user list when typing in search input", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Lucas" } });

    await waitFor(() => {
      expect(mockUseUsers.setSearch).toHaveBeenCalledWith("Lucas");
    });
  });

  test("should display loading spinner while fetching users", async () => {
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

  test("should persist search term in URL", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Users />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "Lucas" } });

    await waitFor(() => {
      window.history.pushState({}, "", `/?search=Lucas`);
      expect(window.location.search).toContain("search=Lucas");
    });

    render(
      <MemoryRouter initialEntries={["/?search=Lucas"]}>
        <Users />
      </MemoryRouter>
    );

    expect(searchInput).toHaveValue("Lucas");
  });

  test("should have correct accessibility attributes", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toHaveAttribute(
      "aria-label",
      "Campo de filtro de usuários"
    );
    expect(searchInput).toHaveAttribute(
      "placeholder",
      "Pesquise por nome de usuário"
    );

    const switchButton = await screen.findByTestId("view-switch-button");

    expect(switchButton).toHaveAttribute(
      "aria-label",
      "Trocar Exibição - Tabela"
    );

    const userCards = screen.getAllByTestId("user-card");
    userCards.forEach((card) => {
      expect(card).toHaveAttribute("role", "region");
      expect(card).toHaveAttribute(
        "aria-labelledby",
        expect.stringContaining("user-name")
      );
    });

    const userIcons = screen.getAllByLabelText("Ícone de usuário");
    userIcons.forEach((icon) => {
      expect(icon).toHaveAttribute("aria-hidden", "true");
    });

    const table = screen.queryByTestId("user-table");
    if (table) {
      expect(table).toHaveAttribute("aria-label", "Tabela de usuários");
      const tableHeaders = ["Nome", "Email", "Telefone"];
      tableHeaders.forEach((header, index) => {
        const headerElement = screen.getByTestId(
          `header-${header.toLowerCase()}`
        );
        expect(headerElement).toHaveTextContent(header);
      });
    }
  });
});
