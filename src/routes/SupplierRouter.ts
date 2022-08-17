import express, { NextFunction, Request, Response } from 'express';
import supplierController from '../controllers/SupplierController';

const supplierRouter = express.Router();

supplierRouter.get(
  '/sage/v1/suppliers',
  (request: Request, response: Response, next: NextFunction) => {
    supplierController.findAll(response, next);
  }
);

supplierRouter.get(
  '/sage/v1/suppliers/:id',
  (request: Request, response: Response, next: NextFunction) => {
    supplierController.findById(request, response, next);
  }
);

supplierRouter.get(
  '/sage/v1/suppliers/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    supplierController.getUpdateHistory(request, response, next);
  }
);

supplierRouter.post(
  '/sage/v1/suppliers',
  (request: Request, response: Response, next: NextFunction) => {
    supplierController.create(request, response, next);
  }
);

supplierRouter.put(
  '/sage/v1/suppliers',
  (request: Request, response: Response, next: NextFunction) => {
    supplierController.update(request, response, next);
  }
);

export default supplierRouter;
