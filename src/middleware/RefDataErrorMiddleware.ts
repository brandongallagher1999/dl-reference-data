import { Prisma } from ".prisma/client";
import { NextFunction, Request, Response } from "express";
import HttpException from '../exceptions/RefDataException';

function RefDataErrorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Sorry something went boom on our end!";
  const errors = error?.errors;

  if (error instanceof Prisma.PrismaClientKnownRequestError){
    
  }
  
  if (errors != undefined) {
    response.status(status).send({
      status,
      message,
      errors,
    });
  } else {
    response.status(status).send({
      status,
      message,
    });
  }
}

export default RefDataErrorMiddleware;