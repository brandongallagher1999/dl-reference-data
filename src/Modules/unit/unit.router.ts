import express, { Request, Response, NextFunction } from "express";
import unitController from "./unit.controller";

const unitRouter = express.Router();

unitRouter.get(
  "/xibalba/v1/refdata/units",
  (request: Request, response: Response, next: NextFunction) => {
    unitController.findAll(response, next);
  }
);

unitRouter.get(
  "/xibalba/v1/refdata/units/:id",
  (request: Request, response: Response, next: NextFunction) => {
    unitController.findById(request, response, next);
  }
);

unitRouter.get(
  "/xibalba/v1/refdata/units/types/:unitTypeId",
  (request: Request, response: Response, next: NextFunction) => {
    unitController.findByUnitType(request, response, next);
  }
);

export default unitRouter;
