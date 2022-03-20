import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/RefDataException";

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Unkown Error";
  response.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;