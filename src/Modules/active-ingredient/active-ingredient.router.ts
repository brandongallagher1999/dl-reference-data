import express, { NextFunction, Request, Response } from "express";
import activeIngredientController from "./active-ingredient.controller";

const activeIngredientsRouter = express.Router();

activeIngredientsRouter.get(
  "/xibalba/v1/refdata/activeIngredients",
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.findAll(response, next);
  }
);

activeIngredientsRouter.get(
  "/xibalba/v1/refdata/activeIngredients/:id",
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.findById(request, response, next);
  }
);

activeIngredientsRouter.post(
  "/xibalba/v1/refdata/activeIngredients",
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.create(request, response, next);
  }
);

activeIngredientsRouter.put(
  "/xibalba/v1/refdata/activeIngredients",
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.update(request, response, next);
  }
);

export default activeIngredientsRouter;
