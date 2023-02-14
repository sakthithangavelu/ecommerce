import React from "react";
import Error from "../components/errorpage/Error";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Error/>", () => {
  test("renders the given text in the error component", () => {
    render(<Error />);
    const contentElement = screen.getByText("Look like you're lost.");
    expect(contentElement).toHaveTextContent("Look like you're lost.");
  });
});

describe("<Error/>", () => {
    test("renders the given text in the error component", () => {
      render(<Error />);
      const contentElement2 = screen.getByText("the page you are looking for is not avaible!");
      expect(contentElement2).toHaveTextContent("the page you are looking for is not avaible!");
    });
  });
  
describe("<Error/>", () => {
  test('should be a link that have href value to "/login"', () => {
    render(<Error />);
    const linkElement = screen.getByRole('link', { name: /Back to Home/i });
    expect(linkElement.getAttribute('href')).toBe('/');
  });
});