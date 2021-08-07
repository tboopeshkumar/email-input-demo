import React from "react";
import { render } from "@testing-library/react";
import { EmailBox } from "./EmailBox";


describe("Email Box", () => { 
    const props = {
     onDeleteEmail: () => {

     },
     data: {
         id: 'test@test123.com',
         isValid: true
     } 
    }
    const renderComponent = () => render(<EmailBox {...props}/>);
  
    it("should have email passed as props", () => {
      const { getByTestId } = renderComponent();
      const emailInput = getByTestId("email-box-component");   
      expect(emailInput).toHaveTextContent(props.data.id);
    });
  });