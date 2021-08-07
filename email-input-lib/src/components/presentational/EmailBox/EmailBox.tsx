import React from 'react';
import { Email } from '../../../types/Email';
import styled from "styled-components";

const EmailBoxContainer = styled.div<{valid: boolean}>`
    border-radius: ${props => props.valid ? '10px' : '0px'};   
    align-items: center;
    background-color: ${props => props.valid ? 'rgba(102, 153, 255, 0.2)' : 'transparent'};
    border-bottom: ${props => props.valid ? 'none' : '1px dashed #D92929'};
    max-width: 175px;  
    height: 25px;      
    margin: 2px;   
    padding-left: 7px;
    display: table;    
    white-space: nowrap;
    table-layout: fixed;   
`;

const EmailDeleteButton = styled.button`
    border: none;
    background: none;
    color: #050038;
    font-size: 1.2em;
    margin-top: 3px;
    &:hover {
        color: red 
    }
    display: table-cell;
    width: 15%;
`;

const EmailTextContainer = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: table-cell;
    width: 85%;
`;
interface EmailBoxProps {
    onDeleteEmail: (email: Email) => void;
    data: Email
}
export const EmailBox:React.FC<EmailBoxProps> = ({data, onDeleteEmail}) => {
    return (
        <EmailBoxContainer valid={data.isValid} data-testid="email-box-component" title={data.id}>
            <EmailTextContainer>{data.id}</EmailTextContainer>
            <EmailDeleteButton
                type="button"             
                onClick={() => onDeleteEmail?.(data)}
            >
            &times;
            </EmailDeleteButton>
        </EmailBoxContainer>
    )
}