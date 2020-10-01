import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from './ContactForm'

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });
  
  test('User can fill out and submit ContactForm',  () => {
    //Arrange
      //render our component
    render(<ContactForm />);
  
    //Act
      //query each input
      //fill out our form elements
      //click our button
    const firstNameInput = screen.queryByLabelText("First Name*")
    // const lastNameInput = screen.getByLabelText('Last Name*')
    // const emailInput = screen.getByLabelText('Email*')
    const button = screen.getByRole("button", {name:/submit/i});
  
    fireEvent.change(firstNameInput, {target:{name:'firstName', value:"tim"}})
  
    fireEvent.click(button)
  
    //Assert
      //test that our form input exists on the page
  
  
  })