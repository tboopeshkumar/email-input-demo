import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const EmailsInput = (el) => {
    ReactDOM.render(
        <App />,
      el
    );
}
console.log(process.env.NODE_ENV);
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dev-test-root-email-input-demo-wrapper');
    console.log(devRoot);
    if (devRoot) {
        EmailsInput(devRoot);
    }
} 

//@ts-ignore
window.EmailsInput = EmailsInput;