import express, { Request, Response, NextFunction } from "express";
import referenceDataUpdateHistoryController from "./update-history.controller";

const unitRouter = express.Router();

unitRouter.get(
  "/xibalba/v1/refdata/updateHistory",
  (request: Request, response: Response, next: NextFunction) => {
    referenceDataUpdateHistoryController.getUpdateHistory(
      request,
      response,
      next
    );
  }
);

export default unitRouter;
