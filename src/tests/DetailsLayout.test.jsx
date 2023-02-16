import React from "react";
import DetailsLayout from "../components/detailsPage/DetailsLayout"
import { render, screen ,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";


describe("<DetailsLayout/>", () => {
  test("renders the given text in the details component", () => {
    render(<DetailsLayout />);
    const contentElement = screen.getByText("Products Details");
    expect(contentElement).toHaveTextContent("Products Details");
  });
});

