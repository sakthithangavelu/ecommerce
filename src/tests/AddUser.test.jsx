import React from "react";
import AddUser from "../adminPages/AddUser";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useHref: () => mockedUsedNavigate,
}));

describe("<AddUser/>", () => {
  const initialState = {type:"text"};
  const mockStore = configureStore();
  let store;
  test('test the fname input', () => {
    store = mockStore(initialState);
    const { getByTestId } = render(<Provider store={store}><AddUser /></Provider>);
    expect(getByTestId("fname-test")).not.toBeNull();
  });
});

describe("<AddUser/>", () => {
    const initialState = {type:"text"};
    const mockStore = configureStore();
    let store;
    test('test the lname input', () => {
      store = mockStore(initialState);
      const { getByTestId } = render(<Provider store={store}><AddUser /></Provider>);
      expect(getByTestId("lname-test")).not.toBeNull();
    });
  });

  describe("<AddUser/>", () => {
    const initialState = {type:"email"};
    const mockStore = configureStore();
    let store;
    test('test the email input', () => {
      store = mockStore(initialState);
      const { getByTestId } = render(<Provider store={store}><AddUser /></Provider>);
      expect(getByTestId("admin-email-test")).not.toBeNull();
    });
  });

  describe("<AddUser/>", () => {
    const initialState = {type:"password"};
    const mockStore = configureStore();
    let store;
    test('test the password input', () => {
      store = mockStore(initialState);
      const { getByTestId } = render(<Provider store={store}><AddUser /></Provider>);
      expect(getByTestId("admin-password-test")).not.toBeNull();
    });
  });

  describe("<AddUser/>", () => {
    const initialState = {type:"button"};
    const mockStore = configureStore();
    let store;
    test('test the submit button', () => {
      store = mockStore(initialState);
      render(<Provider store={store}><AddUser /></Provider>);
      fireEvent.click(screen.getByTestId("submit-button-test"))
    });
  });

  describe("<AddUser/>", () => {
    const initialState = {type:"button"};
    const mockStore = configureStore();
    let store;
    test('test the back button', () => {
      store = mockStore(initialState);
      render(<Provider store={store}><AddUser /></Provider>);
      fireEvent.click(screen.getByTestId("back-button-test"))
    });
  });
