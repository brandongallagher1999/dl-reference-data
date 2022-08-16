import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/RefDataException';
import { logger } from '../logger';

function refDataErrorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  logger.error(error);
  const status = error.status || 500;
  const message = error.message || 'Sorry something went boom on our end!';
  const errors = error?.errors;
  if (errors != undefined) {
    response.status(status).send({
      status,
      message,
      errors
    });
  } else {
    response.status(status).send({
      status,
      message
    });
  }
}

export default refDataErrorMiddleware;
