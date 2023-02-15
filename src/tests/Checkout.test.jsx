import React from "react";
import Checkout from "../components/Checkout";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));

describe("<Checkout/>", () => {
  test("render name input", () => {
    render(<MemoryRouter><Checkout /></MemoryRouter>);//keeps the history of your “URL” in memory
    const inputElement = screen.getByTestId("name-test");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type","text");
  });
});
test("test name input is valid", () => {
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const inputElement = screen.getByTestId("name-test");
  fireEvent.change(inputElement, { target: { value: "Sakthivel" } });
  expect(screen.getByTestId("name-test")).toHaveValue("Sakthivel");
});
