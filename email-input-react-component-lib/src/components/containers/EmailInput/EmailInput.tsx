import React, { useState } from "react";
import styled from "styled-components";
import { Email } from "../../../types/Email";
import { isValidEmail } from "../../../utils/email-validation-utils";
import { EmailBox } from "../../presentational/EmailBox/EmailBox";
import { InputBox } from "../../presentational/InputBox/InputBox";

import { EmailInputComponentProps } from "./EmailInput.types";

const StyledDiv = styled.div`
  display: flex;  
  flex-direction: row; 
  flex-wrap: wrap;
  border: 1px solid #C3C2CF;
  border-radius: 4px;
  padding: 8px;
  width: 100%;

  ${(props) =>
    props.theme === "secondary" &&
    `background-color: black;
     color: white;`}
`;

const EmailInput: React.FC<EmailInputComponentProps> = ({ theme }) => {

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
        <StyledDiv data-testid="test-component" theme={theme}>
            {emailList.map(item => (
              <EmailBox data={item} onDeleteEmail={handleDeleteEmail}/>  
            ))}  
            <InputBox onNewEmailAdded={handleNewEmailAdded} 
                onNewEmailsPasted={handleNewEmailsPasted} 
            />                      
        </StyledDiv>
    )

 
};

export default EmailInput;