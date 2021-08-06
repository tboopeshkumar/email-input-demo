import React from "react";
import { render } from "@testing-library/react";

import EmailInput from "./EmailInput";
import { EmailInputComponentProps } from "./EmailInput.types";

describe("Email Input", () => {
  let props: EmailInputComponentProps;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<EmailInput {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const emailInput = getByTestId("test-component");

    expect(emailInput).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const emailInput = getByTestId("test-component");

    expect(emailInput).toHaveClass("test-component-secondary");
  });
});