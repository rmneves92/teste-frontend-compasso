import React from "react";
import Profile from "../components/profile";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const userMock = {
  avatar_url: "https://picsum.photos/200/300",
  name: "Philip Beck",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

describe("Profile", () => {
  it("should render profile component", () => {
    render(<Profile user={userMock} />);
    const profileElement = screen.getByTestId("profile");

    expect(profileElement).toBeInTheDocument();
    expect(profileElement).toHaveTextContent("Philip Beck");
  });
});
