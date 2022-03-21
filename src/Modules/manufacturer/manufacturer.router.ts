import express, { NextFunction, Request, Response } from "express";
import ManufacturerController from "./manufacturer.controller";

const manufacturerRouter = express.Router();

manufacturerRouter.get(
  "/xibalba/v1/refdata/manufacturers",
  (request: Request, response: Response, next: NextFunction) => {
    ManufacturerController.findAll(response, next);
  }
);

manufacturerRouter.get(
  "/xibalba/v1/refdata/manufacturers/:id",
  (request: Request, response: Response, next: NextFunction) => {
    ManufacturerController.findById(request, response, next);
  }
);

export default manufacturerRouter;
