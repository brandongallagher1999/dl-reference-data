import { NextFunction, Request, Response } from "express";

interface IController {
    findAll(response: Response, next: NextFunction): Promise<any>;
    findById(request: Request, response: Response, next: NextFunction): Promise<any>;
    create(request: Request, response: Response, next: NextFunction): Promise<any>;
    update(request: Request, response: Response, next: NextFunction): Promise<any>;
    getUpdateHistory(request: Request, response: Response, next: NextFunction): Promise<any>;
}

export default IController;