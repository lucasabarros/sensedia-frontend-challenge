import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { UserCard } from "../../src/components/UserCard/UserCard";
import { mockUsers } from "../../__mocks__/mockUsers";

describe("UserCard Component", () => {
  it("should render user name, email, and phone", () => {
    render(<UserCard user={mockUsers[0]} />);

    expect(screen.getByText("Lucas Barros")).toBeInTheDocument();
    expect(screen.getByText("lucas.barros@test.com")).toBeInTheDocument();
    expect(screen.getByText("12-3456-7890")).toBeInTheDocument();
  });

  it("should have correct role and aria-labels for accessibility", () => {
    render(<UserCard user={mockUsers[0]} />);
    const card = screen.getByTestId("user-card");
    expect(card).toHaveAttribute("role", "region");
    expect(card).toHaveAttribute("aria-labelledby", "user-name");
  });

  it("should render icons with aria-hidden set to true", () => {
    render(<UserCard user={mockUsers[0]} />);
    const userIcon = screen.getByLabelText("Ícone de usuário");
    expect(userIcon).toHaveAttribute("aria-hidden", "true");
  });

  it("should display correct user data", () => {
    render(<UserCard user={mockUsers[0]} />);
    expect(screen.getByTestId("user-name").textContent).toBe("Lucas Barros");
    expect(screen.getByTestId("user-email").textContent).toBe(
      "lucas.barros@test.com"
    );
    expect(screen.getByTestId("user-phone").textContent).toBe("12-3456-7890");
  });
});
