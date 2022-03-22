import express, { NextFunction, Request, Response } from "express";
import unitTypeController from "./unit-type.controller";
const unitTypeRouter = express.Router();

unitTypeRouter.get(
  "/xibalba/v1/refdata/unitTypes",
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.findAll(response, next);
  }
);

unitTypeRouter.get(
  "/xibalba/v1/refdata/unitTypes/:id",
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.findById(request, response, next);
  }
);

export default unitTypeRouter;
