import express, { NextFunction, Request, Response } from "express";
import paymentMethodController from "./payment-method.controller";

const paymentMethodRouter = express.Router();

paymentMethodRouter.get(
  "/xibalba/v1/refdata/paymentMethods",
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.findAll(response, next);
  }
);

paymentMethodRouter.get(
  "/xibalba/v1/refdata/paymentMethods/:id",
  (request: Request, response: Response, next: NextFunction) => {
    paymentMethodController.findById(request, response, next);
  }
);

export default paymentMethodRouter;
