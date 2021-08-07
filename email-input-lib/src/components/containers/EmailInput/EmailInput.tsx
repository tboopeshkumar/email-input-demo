import React, { useState, useImperativeHandle } from "react";
import styled from "styled-components";
import { Email } from "../../../types/Email";
import { isValidEmail } from "../../../utils/email-validation-utils";
import { EmailBox } from "../../presentational/EmailBox/EmailBox";
import { InputBox } from "../../presentational/InputBox/InputBox";

import { EmailInputComponentProps, EmailInputComponentRef } from "./EmailInput.types";

const StyledDiv = styled.div`
  display: flex;  
  flex-direction: row; 
  flex-wrap: wrap;
  border: 1px solid #C3C2CF;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  min-width: 440px;
  min-height: 96px;
  `;

const EmailInput = React.forwardRef<EmailInputComponentProps, EmailInputComponentRef>((props, ref) => {
    
    useImperativeHandle(ref, () => ({
        getEmailsCount: () => {            
            return emailList.length;
        },
        addEmail: (email: string) => {
            updateEmailList([email]);
        }        
    }));


    const [emailList, setEmailList] = useState<Email[]>([]);  
    const handleDeleteEmail = email => {
        setEmailList(emailList.filter(e => e !== email));        
    };
    const handleNewEmailAdded = (email: string) => {
        updateEmailList([email]);
    }
    const handleNewEmailsPasted = (emails: string[]) => {
        updateEmailList(emails);
    }

    const updateEmailList = (emails: string[]) => {
        const newEmails: Email[] = [];
        emails.forEach(e => {
            const isExists = emailList.some(email => email.id.toUpperCase() === e.toUpperCase());
            if(isExists) 
             return;
            newEmails.push({
                id: e,
                isValid: isValidEmail(e)
            });              
        });
        setEmailList([...emailList, ...newEmails]);
    }

    return (
        <StyledDiv data-testid="email-input-component">
            {emailList.map(item => (
              <EmailBox key={item.id} data={item} onDeleteEmail={handleDeleteEmail}/>  
            ))}  
            <InputBox onNewEmailAdded={handleNewEmailAdded} 
                onNewEmailsPasted={handleNewEmailsPasted} 
            />                      
        </StyledDiv>
    )

 
});

export default EmailInput;