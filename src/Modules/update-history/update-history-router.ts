import express, { Request, Response, NextFunction } from "express";
import referenceDataUpdateHistoryController from "./update-history.controller";

const refDataUpdateHistoryRouter = express.Router();

refDataUpdateHistoryRouter.get(
  "/xibalba/v1/refdata/updateHistory",
  (request: Request, response: Response, next: NextFunction) => {
    referenceDataUpdateHistoryController.getUpdateHistory(
      request,
      response,
      next
    );
  }
);

export default refDataUpdateHistoryRouter;
