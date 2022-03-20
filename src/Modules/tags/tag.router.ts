import express, { NextFunction, Request, Response } from "express";
import tagController from "./tag.controller";

const tagRouter = express.Router();

tagRouter.get(
  "/xibalba/v1/refdata/tags",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.findAll(response, next);
  }
);

tagRouter.get(
  "/xibalba/v1/refdata/tags/:id",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.findById(request, response, next);
  }
);

export default tagRouter;
