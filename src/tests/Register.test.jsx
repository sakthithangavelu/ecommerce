import React from "react";
import Register from "../pages/Register";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));


describe("<Register/>", () => {
    test("render fname input", () => {
      render(<MemoryRouter><Register /></MemoryRouter>);
      const inputElement = screen.getByTestId("reg-fname-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });
  });
  test("test fname input is valid", () => {
    render(<MemoryRouter><Register /></MemoryRouter>);
    const inputElement = screen.getByTestId("reg-fname-test");
    fireEvent.change(inputElement, { target: { value: "Sakthivel" } });
    expect(screen.getByTestId("reg-fname-test")).toHaveValue("Sakthivel");
});


describe("<Register/>", () => {
    test("renders the given text in the register component", () => {
      render(<MemoryRouter><Register /></MemoryRouter>);
      const contentElement = screen.getByText("Create an account");
      expect(contentElement).toHaveTextContent("Create an account");
    });
  });

  
describe("<Register/>", () => {
    test("render lname input", () => {
      render(<MemoryRouter><Register /></MemoryRouter>);
      const inputElement = screen.getByTestId("reg-lname-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });
  });
  test("test lname input is valid", () => {
    render(<MemoryRouter><Register /></MemoryRouter>);
    const inputElement = screen.getByTestId("reg-lname-test");
    fireEvent.change(inputElement, { target: { value: "Thangavelu" } });
    expect(screen.getByTestId("reg-lname-test")).toHaveValue("Thangavelu");
});

describe("<Register/>", () => {
    test("render email input", () => {
      render(<MemoryRouter><Register /></MemoryRouter>);
      const inputElement = screen.getByTestId("reg-email-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "email");
    });
  });
  test("test email input is valid", () => {
    render(<MemoryRouter><Register /></MemoryRouter>);
    const inputElement = screen.getByTestId("reg-email-test");
    fireEvent.change(inputElement, { target: { value: "sakthi@aspiresys.com" } });
    expect(screen.getByTestId("reg-email-test")).toHaveValue("sakthi@aspiresys.com");
});

describe("<Register/>", () => {
    test("render password input", () => {
      render(<MemoryRouter><Register /></MemoryRouter>);
      const inputElement = screen.getByTestId("reg-password-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "password");
    });
  });
  test("test password input is valid", () => {
    render(<MemoryRouter><Register /></MemoryRouter>);
    const inputElement = screen.getByTestId("reg-password-test");
    fireEvent.change(inputElement, { target: { value: "Sakthi@123" } });
    expect(screen.getByTestId("reg-password-test")).toHaveValue("Sakthi@123");
});

it("test create button and validation",()=>{
    render(<MemoryRouter><Register /></MemoryRouter>);
    const buttonElement = screen.getByTestId("create-button-test");
    fireEvent.click(buttonElement)
  }) 

it("test back button and validation",()=>{
    render(<MemoryRouter><Register /></MemoryRouter>);
    const buttonElement = screen.getByTestId("back-button-test");
    fireEvent.click(buttonElement)
})


