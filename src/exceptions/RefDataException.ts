/**
 * Class Representing An Exception When Serving or Creating Reference Data
 */
class RefDataException extends Error {
  status: number;
  message: string;
  errors?: string[];

  /**
   *
   * @param {number} status
   * @param {string} message
   */
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default RefDataException;
