import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import {
  UserContext,
  UserProvider,
} from "../../src/contexts/UserContext/UserContext";
import { act } from "react";
import { mockUsers } from "../../__mocks__/mockUsers";
import { User } from "../../src/types/User";

const TestComponent: React.FC = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { users } = context;

  return (
    <>
      {users.map((user) => (
        <div key={user.id} data-testid={`user-${user.id}`}>
          {user.name}
        </div>
      ))}
    </>
  );
};

describe("UserContext", () => {
  it("should provide the correct initial values", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    expect(screen.queryByTestId("user-1")).not.toBeInTheDocument();
    expect(screen.queryByTestId("user-2")).not.toBeInTheDocument();
  });

  it("should update the users state correctly", () => {
    let setUsers: (users: typeof mockUsers) => void;

    const TestComponentWithSetter = () => {
      const context = useContext(UserContext);

      if (!context) {
        return <div>Context not found</div>;
      }

      setUsers = context.setUsers;
      return null;
    };

    render(
      <UserProvider>
        <TestComponentWithSetter />
        <TestComponent />
      </UserProvider>
    );

    act(() => {
      setUsers(mockUsers);
    });

    expect(screen.getByTestId("user-1")).toHaveTextContent("Lucas Barros");
    expect(screen.getByTestId("user-2")).toHaveTextContent("Beatriz Barbosa");
  });

  it("should display error when UserContext is not provided", () => {
    render(<TestComponent />);

    expect(screen.getByText("Context not found")).toBeInTheDocument();
  });
});

describe("UserContext", () => {
  it("should provide the correct initial values", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    expect(screen.queryByTestId("user-1")).not.toBeInTheDocument();
    expect(screen.queryByTestId("user-2")).not.toBeInTheDocument();
  });

  it("should update the users state correctly", () => {
    let setUsers: (users: User[]) => void;

    const TestComponentWithSetter = () => {
      const context = useContext(UserContext);

      if (!context) {
        return <div>Context not found</div>;
      }

      setUsers = context.setUsers;
      return null;
    };

    render(
      <UserProvider>
        <TestComponentWithSetter />
        <TestComponent />
      </UserProvider>
    );

    act(() => {
      setUsers(mockUsers);
    });

    expect(screen.getByTestId("user-1")).toHaveTextContent("Lucas Barros");
    expect(screen.getByTestId("user-2")).toHaveTextContent("Beatriz Barbosa");
  });

  it("should display error when UserContext is not provided", () => {
    render(<TestComponent />);

    expect(screen.getByText("Context not found")).toBeInTheDocument();
  });
});
