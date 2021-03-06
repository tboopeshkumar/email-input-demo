import React, { useState } from 'react';
import styled from "styled-components";

const EmailInput = styled.input`   
    max-width: 125px;
    min-width: 125px; 
    height: 25px;   
    margin: 4px;
    &:focus-visible {
        outline: none;
    }
    border: none;
`;

interface InputBoxProps {
    onNewEmailAdded: (email: string) => void;
    onNewEmailsPasted: (emails: string[]) => void;   
}
export const InputBox:React.FC<InputBoxProps> = ({onNewEmailAdded, onNewEmailsPasted}) => {
    const [value, setValue] = useState('');
    const handleKeyDown = evt => {       
        console.log(evt.key);
        if (["Enter", "Tab", ","].indexOf(evt.key) != -1) {            
            evt.preventDefault();      
            updateNewEmail();
        }
    }
    const handleBlur = () => {
       updateNewEmail();
    }
    const updateNewEmail = () => {
        const emailText = value.trim();  
        if(emailText) {
            onNewEmailAdded?.(emailText);
        }
        setValue('');
        
    }
    const handleChange = evt => {
        setValue(evt.target.value);
    }    
    const handlePaste = evt => {
        evt.preventDefault();
        var paste = evt.clipboardData.getData("text");
        var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);
        if (emails) {
            onNewEmailsPasted?.(emails);
        }
    };
    return (
        <EmailInput               
            value={value}
            placeholder="add more people..."
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onPaste={handlePaste}
            onBlur={handleBlur}
        />
    )
}