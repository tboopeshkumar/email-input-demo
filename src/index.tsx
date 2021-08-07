import React, { useRef } from "react";
import ReactDOM from "react-dom";
import App, { AppRef } from "./App";

const EmailsInput = (el) => {   
    const appRef = React.createRef<AppRef>();
    ReactDOM.render(        
        <App ref={appRef}/>,
      el
    );
    return {
        getEmailsCount: () => {
            return appRef.current?.getEmailsCount();
        },
        addEmail: (email: string) => {
            appRef.current?.addEmail(email);
        }
    }
}
console.log(process.env.NODE_ENV);
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#emails-input');    
    if (devRoot) {
        EmailsInput(devRoot);
    }
} 

//@ts-ignore
window.EmailsInput = EmailsInput;