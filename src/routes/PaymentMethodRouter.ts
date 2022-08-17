import express, { NextFunction, Request, Response } from 'express';
import paymentMethodController from '../controllers/PaymentMethodController';

const paymentMethodRouter = express.Router();

paymentMethodRouter.get(
  '/sage/v1/paymentMethods',
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.findAll(response, next);
  }
);

paymentMethodRouter.get(
  '/sage/v1/paymentMethods/:id',
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.findById(request, response, next);
  }
);

paymentMethodRouter.get(
  '/sage/v1/paymentMethods/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.getUpdateHistory(request, response, next);
  }
);

paymentMethodRouter.post(
  '/sage/v1/paymentMethods',
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.create(request, response, next);
  }
);

paymentMethodRouter.put(
  '/sage/v1/paymentMethods',
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.update(request, response, next);
  }
);

export default paymentMethodRouter;
