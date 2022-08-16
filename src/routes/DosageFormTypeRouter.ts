import express, { NextFunction, Request, Response } from 'express';
import dosageFormTypeController from '../controllers/DosageFormTypeController';

const dosageFormTypeRouter = express.Router();

dosageFormTypeRouter.get(
  '/sage/v1/dosageFormTypes',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.findAll(response, next);
  }
);

dosageFormTypeRouter.get(
  '/sage/v1/dosageFormTypes/:id',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.findById(request, response, next);
  }
);

dosageFormTypeRouter.get(
  '/sage/v1/dosageFormTypes/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.getUpdateHistory(request, response, next);
  }
);

dosageFormTypeRouter.post(
  '/sage/v1/dosageFormTypes',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.create(request, response, next);
  }
);

dosageFormTypeRouter.put(
  '/sage/v1/dosageFormTypes',
  (request: Request, response: Response, next: NextFunction) => {
    dosageFormTypeController.update(request, response, next);
  }
);

export default dosageFormTypeRouter;
