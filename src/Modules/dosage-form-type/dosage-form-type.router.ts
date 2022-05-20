import express, { NextFunction, Request, Response } from "express";
import dosageFormTypeController from "./dosage-form-type.controller";
const dosageFormTypeRouter = express.Router();

dosageFormTypeRouter.get(
  "/xibalba/v1/refdata/dosageFormTypes",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.findAll(response, next);
  }
);

dosageFormTypeRouter.get(
  "/xibalba/v1/refdata/dosageFormTypes/:id",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.findById(request, response, next);
  }
);

dosageFormTypeRouter.post(
  "/xibalba/v1/refdata/dosageFormTypes",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.create(request, response, next);
  }
);

dosageFormTypeRouter.put(
  "/xibalba/v1/refdata/dosageFormTypes",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.update(request, response, next);
  }
);

export default dosageFormTypeRouter;
