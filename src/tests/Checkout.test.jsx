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
    render(<MemoryRouter><Checkout /></MemoryRouter>);
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

describe("<Checkout/>", () => {
  test("render email input", () => {
    render(<MemoryRouter><Checkout /></MemoryRouter>);
    const inputElement2 = screen.getByTestId("c-email-test");
    expect(inputElement2).toBeInTheDocument();
    expect(inputElement2).toHaveAttribute("type","email");
  });
});
test("test email input is valid", () => {
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const inputElement2 = screen.getByTestId("c-email-test");
  fireEvent.change(inputElement2, { target: { value: "sakthi@aspiresys.com" } });
  expect(screen.getByTestId("c-email-test")).toHaveValue("sakthi@aspiresys.com");
});

describe("<Checkout/>", () => {
  test("render address input for House number and street name", () => {
    render(<MemoryRouter><Checkout /></MemoryRouter>);
    const inputElement3 = screen.getByTestId("address1-test");
    expect(inputElement3).toBeInTheDocument();
    expect(inputElement3).toHaveAttribute("type","text");
  });
});
test("test address input1 is valid for House number and street name", () => {
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const inputElement3 = screen.getByTestId("address1-test");
  fireEvent.change(inputElement3, { target: { value: "10,Park street" } });
  expect(screen.getByTestId("address1-test")).toHaveValue("10,Park street");
});


describe("<Checkout/>", () => {
  test("render address input for City, State, Country", () => {
    render(<MemoryRouter><Checkout /></MemoryRouter>);
    const inputElement4 = screen.getByTestId("address2-test");
    expect(inputElement4).toBeInTheDocument();
    expect(inputElement4).toHaveAttribute("type","text");
  });
});
test("test address input1 is valid for City, State, Country", () => {
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const inputElement4 = screen.getByTestId("address2-test");
  fireEvent.change(inputElement4, { target: { value: "Chennai,Tamil Nadu,India" } });
  expect(screen.getByTestId("address2-test")).toHaveValue("Chennai,Tamil Nadu,India");
});

describe("<Checkout/>", () => {
  test("render address input for Postcode", () => {
    render(<MemoryRouter><Checkout /></MemoryRouter>);
    const inputElement5 = screen.getByTestId("postcode-test");
    expect(inputElement5).toBeInTheDocument();
    expect(inputElement5).toHaveAttribute("type","number");
  });
});
test("test address input1 is valid for PostCode", () => {
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const inputElement5 = screen.getByTestId("postcode-test");
  fireEvent.change(inputElement5, { target: { value: 600020 } });
  expect(screen.getByTestId("postcode-test")).toHaveValue(600020);
});

describe("<Checkout/>", () => {
  test("render address input for Phone number", () => {
    render(<MemoryRouter><Checkout /></MemoryRouter>);
    const inputElement6 = screen.getByTestId("phone-test");
    expect(inputElement6).toBeInTheDocument();
    expect(inputElement6).toHaveAttribute("type","tel");
  });
});
test("test address input1 is valid for Phone number", () => {
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const inputElement6 = screen.getByTestId("phone-test");
  fireEvent.change(inputElement6, { target: { value: "7708989923" } });
  expect(screen.getByTestId("phone-test")).toHaveValue("7708989923");
});
it("test place order button and validation",()=>{
  render(<MemoryRouter><Checkout /></MemoryRouter>);
  const buttonElement7 = screen.getByTestId("placeOrder-button-test");
  fireEvent.click(buttonElement7)
}) 
