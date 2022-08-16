import express, { NextFunction, Request, Response } from 'express';
import activeIngredientController from '../controllers/ActiveIngredientController';

const activeIngredientRouter = express.Router();

activeIngredientRouter.get(
  '/sage/v1/activeIngredients',
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.findAll(response, next);
  }
);

activeIngredientRouter.get(
  '/sage/v1/activeIngredients/:id',
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.findById(request, response, next);
  }
);

activeIngredientRouter.get(
  '/sage/v1/activeIngredients/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.getUpdateHistory(request, response, next);
  }
);

activeIngredientRouter.post(
  '/sage/v1/activeIngredients',
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.create(request, response, next);
  }
);

activeIngredientRouter.put(
  '/sage/v1/activeIngredients',
  (request: Request, response: Response, next: NextFunction) => {
    activeIngredientController.update(request, response, next);
  }
);

export default activeIngredientRouter;
