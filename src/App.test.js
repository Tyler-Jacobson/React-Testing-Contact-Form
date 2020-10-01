import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

test('render the App',  () => {
  // Arrange: Render our component
  render(<App/>);

  // Act: Get access to our ContactForm
  const header = screen.getByText(/add new animal/i)

  // Assert: Passess if our ContactForm element exists
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/add new animal/i);
})

