import React from "react";
import Announcement from "../components/Announcement";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Announcement />", () => {
  test("renders the given text in the announcement component", () => {
    render(<Announcement />);
    const contentElement = screen.getByText("Free Shipping on orders above 9,999/-");
    expect(contentElement).toHaveTextContent("Free Shipping on orders above 9,999/-");
  });
});
