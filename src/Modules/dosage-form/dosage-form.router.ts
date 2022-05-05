import express, { NextFunction, Request, Response } from "express";
import dosageFormController from "./dosage-form.controller";

const dosageFormRouter = express.Router();

dosageFormRouter.get(
  "/xibalba/v1/refdata/dosageForms",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.findAll(response, next);
  }
);

dosageFormRouter.get(
  "/xibalba/v1/refdata/dosageForms/:id",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.findById(request, response, next);
  }
);

dosageFormRouter.get(
  "/xibalba/v1/refdata/dosageForms/dosageFormType/:dosageFormTypeId",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.findByDosageFormsByTypeId(request, response, next);
  }
);

dosageFormRouter.post(
  "/xibalba/v1/refdata/dosageForms",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.create(request, response, next);
  }
);

dosageFormRouter.put(
  "/xibalba/v1/refdata/dosageForms",
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.update(request, response, next);
  }
);

export default dosageFormRouter;
