import React from "react";
import Home from "../screens/Home";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import UserProvider from "../context/userContext";

describe("Header", () => {
  it("should display results after clicking in button", async () => {
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    const inputElement = screen.getByTestId("input");
    const btnSearchElement = screen.getByTestId("btn-search");

    userEvent.type(inputElement, "rmneves92");
    userEvent.click(btnSearchElement);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const btnReposElement = screen.getByTestId("btn-repos");

    userEvent.click(btnReposElement);

    await waitFor(() =>
      expect(screen.getByTestId("results")).toBeInTheDocument()
    );
  });
});
