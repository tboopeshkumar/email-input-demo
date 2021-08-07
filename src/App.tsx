import React, { useImperativeHandle, useRef } from "react";
import {EmailInput, EmailInputComponentRef} from 'email-input-lib';
export interface AppRef {
  addEmail: (email: string) => void;
  getEmailsCount: () => number;
}
const App = React.forwardRef((props, ref) => {
  const emailInputRef = useRef<EmailInputComponentRef>();
  useImperativeHandle(ref, () => ({
    getEmailsCount: () => {            
        return emailInputRef.current?.getEmailsCount();
    },
    addEmail: (email: string) => {
      emailInputRef.current?.addEmail(email);
    }
    
  }));
  return (
    <EmailInput ref={emailInputRef}/>
  );
});

export default App;