import express, { NextFunction, Request, Response } from 'express';
import productCategoryController from '../controllers/ProductCategoryController';

const productCategoryRouter = express.Router();

productCategoryRouter.get(
  '/sage/v1/productCategories',
  (request: Request, response: Response, next: NextFunction) => {
    productCategoryController.findAll(response, next);
  }
);

productCategoryRouter.get(
  '/sage/v1/productCategories/:id',
  (request: Request, response: Response, next: NextFunction) => {
    productCategoryController.findById(request, response, next);
  }
);

productCategoryRouter.get(
  '/sage/v1/productCategories/updateHistory/:id',
  (request: Request, response: Response, next: NextFunction) => {
    productCategoryController.getUpdateHistory(request, response, next);
  }
);

productCategoryRouter.post(
  '/sage/v1/productCategories',
  (request: Request, response: Response, next: NextFunction) => {
    productCategoryController.create(request, response, next);
  }
);

productCategoryRouter.put(
  '/sage/v1/productCategories',
  (request: Request, response: Response, next: NextFunction) => {
    productCategoryController.update(request, response, next);
  }
);

export default productCategoryRouter;
