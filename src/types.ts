interface ServiceResponse {
  error?: Error;
  status: number;
  message?: string;
  itemCount?: number;
  data?: any[];
}

enum ExceptionMessage {
  NO_DATA_EXCEPTION_MESSAGE = "No data found for ",
  MALFORMED_REQUEST_EXCEPTION_MESSAGE = "Rquest is malformed: ",
}

export { ServiceResponse, ExceptionMessage };
