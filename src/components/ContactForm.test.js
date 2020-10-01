import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("Attempts to validate form fields", async () => {
    // Arrange
    render(<ContactForm />);

    // Act
    await act(async () => {
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/Last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const buttonInput = await screen.getByRole(/button/i, {name:/submit/i})

    fireEvent.change(firstNameInput, {target:{name:"firstName", value:"timmy"}})
    expect(firstNameInput.value === "timmy").toBeTruthy()

    fireEvent.change(lastNameInput, {target:{name:"lastName", value:"timmyson"}})
    expect(lastNameInput.value === "timmyson").toBeTruthy()

    fireEvent.change(emailInput, {target:{name:"email", value:"timmy@timmy.com"}})
    expect(emailInput.value === "timmy@timmy.com").toBeTruthy()

    fireEvent.change(messageInput, {target:{name:"message", value:"timmy"}})
    expect(messageInput.value === "timmy").toBeTruthy()

    expect(buttonInput).toBeInTheDocument()
    fireEvent.click(buttonInput)
    })
    // Assert
});
