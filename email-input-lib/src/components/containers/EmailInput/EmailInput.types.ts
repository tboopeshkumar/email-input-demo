import { Email, EmailReplace } from "../../../types/Email";

export interface EmailInputComponentProps {
 
}

export type EmailChangeCallback = (emails: Email[], event: "added" | "removed") => void;
export interface EmailInputComponentRef {
    addEmail: (email: string) => void;
    getEmailsCount: () => number;
    getAllEmails: () => Email[];
    subscribeEmailListChange: (emailChangeCallback:EmailChangeCallback) => void;
    replaceAll:(newEmails: EmailReplace[]) => void;
}