import express, { NextFunction, Request, Response } from 'express';
import unitTypeController from '../controllers/UnitTypeController';

const unitTypeRouter = express.Router();

unitTypeRouter.get(
  '/sage/v1/unitTypes',
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.findAll(response, next);
  }
);

unitTypeRouter.get(
  '/sage/v1/unitTypes/:id',
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.findById(request, response, next);
  }
);

unitTypeRouter.get(
  '/sage/v1/unitTypes/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.getUpdateHistory(request, response, next);
  }
);

unitTypeRouter.post(
  '/sage/v1/unitTypes',
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.create(request, response, next);
  }
);

unitTypeRouter.put(
  '/sage/v1/unitTypes',
  (request: Request, response: Response, next: NextFunction) => {
    unitTypeController.update(request, response, next);
  }
);

export default unitTypeRouter;
