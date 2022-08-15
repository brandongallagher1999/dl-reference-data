export enum CrudInstruction {
    CREATE = "Create", 
    UPDATE = "Update",
}

export type NumberValidationResult = {
    isValid: boolean,
    value : number,
}