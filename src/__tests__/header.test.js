import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import UserProvider, { useUser } from "../context/userContext";

describe("Header", () => {
  it("should display nav link after search user", async () => {
    const TestComponent = () => {
      const { user, setUser } = useUser();
      return (
        <>
          <a data-testid="link">{user?.name && "Detalhes do usuário"}</a>
          <button
            data-testid="button"
            onClick={() => setUser({ name: "test" })}
          >
            set user
          </button>
        </>
      );
    };

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    const linkElement = screen.getByTestId("link");
    const buttonElement = screen.getByTestId("button");

    expect(linkElement).not.toHaveTextContent("Detalhes do usuário");

    userEvent.click(buttonElement);

    expect(linkElement).toHaveTextContent("Detalhes do usuário");
  });
});
