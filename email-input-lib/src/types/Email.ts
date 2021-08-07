export interface Email {
    id: string;
    isValid: boolean
}

export interface EmailReplace {
    existingId: string;
    newId: string;
}