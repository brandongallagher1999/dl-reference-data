enum CrudInstruction {
  CREATE = "Create",
  UPDATE = "Update",
}
type NumberValidationResult = {
  isValid: boolean;
  value: number;
};

export { CrudInstruction, NumberValidationResult };
