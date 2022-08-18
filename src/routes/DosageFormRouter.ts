import express, { NextFunction, Request, Response } from 'express';
import dosageFormController from '../controllers/DosageFormController';

const dosageFormRouter = express.Router();

dosageFormRouter.get(
  '/sage/v1/dosageForms',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.findAll(response, next);
  }
);

dosageFormRouter.get(
  '/sage/v1/dosageForms/:id',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.findById(request, response, next);
  }
);

dosageFormRouter.get(
  '/sage/v1/dosageForms/dosageFormType/:dosageFormTypeId',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.findByDosageFormTypeId(request, response, next);
  }
);

dosageFormRouter.get(
  '/sage/v1/dosageForms/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.getUpdateHistory(request, response, next);
  }
);

dosageFormRouter.post(
  '/sage/v1/dosageForms',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.create(request, response, next);
  }
);

dosageFormRouter.put(
  '/sage/v1/dosageForms',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormController.update(request, response, next);
  }
);

export default dosageFormRouter;
