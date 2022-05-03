class RefDataException extends Error {
  status: number;
  message: string;
  errors?: string[];
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  addErrors(errors: string[]) {
    this.errors = errors;
  }
}

export default RefDataException;
