import express, { NextFunction, Request, Response } from 'express';
import unitController from '../controllers/UnitController';

const unitRouter = express.Router();

unitRouter.get(
  '/sage/v1/units',
  (request: Request, response: Response, next: NextFunction) => {
    unitController.findAll(response, next);
  }
);

unitRouter.get(
  '/sage/v1/units/:id',
  (request: Request, response: Response, next: NextFunction) => {
    unitController.findById(request, response, next);
  }
);

unitRouter.get(
  '/sage/v1/units/unitType/:unitTypeId',
  (request: Request, response: Response, next: NextFunction) => {
    unitController.findByUnitTypeId(request, response, next);
  }
);

unitRouter.get(
  '/sage/v1/units/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    unitController.getUpdateHistory(request, response, next);
  }
);

unitRouter.post(
  '/sage/v1/units',
  (request: Request, response: Response, next: NextFunction) => {
    unitController.create(request, response, next);
  }
);

unitRouter.put(
  '/sage/v1/units',
  (request: Request, response: Response, next: NextFunction) => {
    unitController.update(request, response, next);
  }
);

export default unitRouter;
