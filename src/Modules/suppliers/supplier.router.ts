import express, { NextFunction, Request, Response } from "express";
import supplierController from "./supplier.controller";

const supplierRouter = express.Router();

supplierRouter.get(
  "/xibalba/v1/refdata/supplier",
  (request: Request, response: Response, next: NextFunction) => {
    try {
      supplierController.findAll(response, next);
    } catch (error) {
      next(error);
    }
  }
);

supplierRouter.get(
  "/xibalba/v1/refdata/supplier/:id",
  (request: Request, response: Response, next: NextFunction) => {
    try {
      supplierController.findById(request, response, next);
    } catch (error) {
      next(error);
    }
  }
);

export default supplierRouter;
