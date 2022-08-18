import express, { NextFunction, Request, Response } from 'express';
import manufacturerController from '../controllers/ManufacturerController';

const manufacturerRouter = express.Router();

manufacturerRouter.get(
  '/sage/v1/manufacturers',
  (request: Request, response: Response, next: NextFunction) => {
    manufacturerController.findAll(response, next);
  }
);

manufacturerRouter.get(
  '/sage/v1/manufacturers/:id',
  (request: Request, response: Response, next: NextFunction) => {
    manufacturerController.findById(request, response, next);
  }
);

manufacturerRouter.get(
  '/sage/v1/manufacturers/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    manufacturerController.getUpdateHistory(request, response, next);
  }
);

manufacturerRouter.post(
  '/sage/v1/manufacturers',
  (request: Request, response: Response, next: NextFunction) => {
    manufacturerController.create(request, response, next);
  }
);

manufacturerRouter.put(
  '/sage/v1/manufacturers',
  (request: Request, response: Response, next: NextFunction) => {
    manufacturerController.update(request, response, next);
  }
);

export default manufacturerRouter;
