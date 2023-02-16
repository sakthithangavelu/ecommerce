import React from "react";
import SignIn from "../pages/SignIn";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));

describe("<SignIn/>", () => {
  test("render email input", () => {
    render(<MemoryRouter><SignIn /></MemoryRouter>);//keeps the history of your “URL” in memory
    const inputElement = screen.getByTestId("email-test");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "email");
  });
});
test("test email input is valid", () => {
  render(<MemoryRouter><SignIn /></MemoryRouter>);
  const inputElement = screen.getByTestId("email-test");
  fireEvent.change(inputElement, { target: { value: "sakthi@aspiresys.com" } });
  expect(screen.getByTestId("email-test")).toHaveValue("sakthi@aspiresys.com");
});

describe("<SignIn/>", () => {
  test("render password input", () => {
    render(<MemoryRouter><SignIn /></MemoryRouter>);
    const inputElement2 = screen.getByTestId("password-test");
    expect(inputElement2).toBeInTheDocument();
    expect(inputElement2).toHaveAttribute("type", "password");
  });
});
test("test password input is valid", () => {
  render(<MemoryRouter><SignIn /></MemoryRouter>);
  const inputElement2 = screen.getByTestId("password-test");
  fireEvent.change(inputElement2, { target: { value: "Sakthi@123" } });
  expect(screen.getByTestId("password-test")).toHaveValue("Sakthi@123");
});


it("test submit button and validation",()=>{
  render(<MemoryRouter><SignIn /></MemoryRouter>);
  const buttonElement = screen.getByTestId("SignIn-button-test");
  fireEvent.click(buttonElement)
}) 
it("test newuser button and validation",()=>{
  render(<MemoryRouter><SignIn /></MemoryRouter>);
  const buttonElement = screen.getByTestId("newuser-button-test");
  fireEvent.click(buttonElement)
}) 
it("test back button and validation",()=>{
  render(<MemoryRouter><SignIn /></MemoryRouter>);
  const buttonElement = screen.getByTestId("signin-back-button-test");
  fireEvent.click(buttonElement)
}) 

