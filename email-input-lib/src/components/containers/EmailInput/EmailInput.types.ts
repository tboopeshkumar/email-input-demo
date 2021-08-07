export interface EmailInputComponentProps {
 
}

export interface EmailInputComponentRef {
    addEmail: (email: string) => void;
    getEmailsCount: () => number;
}