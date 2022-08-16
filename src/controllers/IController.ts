import { NextFunction, Request, Response } from 'express';

interface IController {
  findAll(
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined>;
  findById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined>;
  create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined>;
  update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined>;
  getUpdateHistory(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined>;
}

export default IController;
