import React from 'react';
import { Email } from '../../../types/Email';
import styled from "styled-components";

const StyledDiv = styled.div<{valid: boolean}>`
    border-radius: ${props => props.valid ? '10px' : '0px'};
    display: flex;
    align-items: center;
    background-color: ${props => props.valid ? 'rgba(102, 153, 255, 0.2)' : 'transparent'};
    border-bottom: ${props => props.valid ? 'none' : '1px dashed #D92929'};
    max-width: 175px;  
    height: 25px;      
    margin: 2px;   
    padding-left: 7px;
`;

const StyledCloseButton = styled.button`
    border: none;
    background: none;
    color: #050038;
    font-size: 1.2em;
    margin-top: 3px;
    &:hover {
        color: red 
    }
`;

interface EmailBoxProps {
    onDeleteEmail: (email: Email) => void;
    data: Email
}
export const EmailBox:React.FC<EmailBoxProps> = ({data, onDeleteEmail}) => {
    return (
        <StyledDiv valid={data.isValid}>
            <span>{data.id}</span>
            <StyledCloseButton
                type="button"             
                onClick={() => onDeleteEmail?.(data)}
            >
            &times;
        </StyledCloseButton>
    </StyledDiv>
    )
}