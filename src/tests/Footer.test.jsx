import React from "react";
import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Footer />", () => {
  test("renders the given text in the footer component", () => {
    render(<Footer />);
    const contentElement = screen.getByText("BrOwN WoOdS");
    expect(contentElement).toHaveTextContent("BrOwN WoOdS");
  });
});
