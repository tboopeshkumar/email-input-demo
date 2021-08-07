import { EmailChangeCallback, EmailInput, EmailInputComponentRef, EmailReplace } from "email-input-lib";
import React, { useRef } from "react";
import ReactDOM from "react-dom";

const EmailsInput = (el) => {   
    const emailInputRef = React.createRef<EmailInputComponentRef>();
    ReactDOM.render(        
        <EmailInput ref={emailInputRef}/>,
      el
    );
    return {
        getEmailsCount: () =>emailInputRef.current?.getEmailsCount(),
        addEmail: (email: string) => emailInputRef.current?.addEmail(email),
        getAllEmails: () => emailInputRef.current?.getAllEmails(),
        subscribeEmailListChange: (emailChangeCallback:EmailChangeCallback) => {
            emailInputRef.current?.subscribeEmailListChange(emailChangeCallback);
        },
        replaceAll:(newEmails: EmailReplace[]) => emailInputRef.current?.replaceAll(newEmails)
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