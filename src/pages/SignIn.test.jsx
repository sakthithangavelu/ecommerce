import React from "react";
import SignIn from "./SignIn";
import { render, fireEvent, act } from "@testing-library/react";


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SignIn", () => {
  describe("with valid inputs", () => {
    it("calls the onsubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByPlaceholderText, getByRole } = render(
        <SignIn onSubmit={mockOnSubmit} />
      );

      
      await act(async () => {
        fireEvent.change(getByPlaceholderText("Email"), {
          target: { value: "sakthi@aspiresys.com" },
        });
        fireEvent.change(getByPlaceholderText("Password"), {
          target: { value: "Sakthi@123" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button"));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
  describe("with invalid email", () => {
    it.todo("renders the email validation error");
  });
  describe("with invalid password", () => {
    it.todo("renders the password validation error");
  });
});
