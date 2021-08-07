import React from "react";
import { render } from "@testing-library/react";

import EmailInput from "./EmailInput";
import { EmailInputComponentProps } from "./EmailInput.types";

describe("Email Input", () => {
  let props: EmailInputComponentProps;
  const renderComponent = () => render(<EmailInput />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const emailInput = getByTestId("email-input-component");

    expect(emailInput).toHaveClass("test-component-primary");
  });
});