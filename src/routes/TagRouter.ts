
import express, { NextFunction, Request, Response } from "express";
import tagController from "../controllers/TagController";

const tagRouter = express.Router();

tagRouter.get(
  "/sage/v1/tags",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.findAll(response, next);
  }
);

tagRouter.get(
  "/sage/v1/tags/:id",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.findById(request, response, next);
  }
);

tagRouter.get(
  "/sage/v1/tags/updateHistory/:id",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.getUpdateHistory(request, response, next);
  }
);

tagRouter.post(
  "/sage/v1/tags",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.create(request, response, next);
  }
);

tagRouter.put(
  "/sage/v1/tags",
  (request: Request, response: Response, next: NextFunction) => {
    tagController.update(request, response, next);
  }
);

export default tagRouter;