import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { RoutesConfig } from "../../src/router/routes";
import { Users } from "../../src/pages/Users/Users";

describe("RoutesConfig", () => {
  it("should render the Users page for '/' route", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RoutesConfig />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("users-page")).toBeInTheDocument();
    });
  });

  it("should display not found for an invalid route", () => {
    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
