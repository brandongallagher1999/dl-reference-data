import express, { NextFunction, Request, Response } from "express";
import productCategoryController from "./product-category.controller";

const productCategoryRouter = express.Router();

productCategoryRouter.get(
  "/xibalba/v1/refdata/productCategories",
  (request: Request, response: Response, next) => {
    productCategoryController.findAll(response, next);
  }
);

productCategoryRouter.get(
  "/xibalba/v1/refdata/productCategories/:id",
  (request: Request, response: Response, next: NextFunction) => {
    productCategoryController.findById(request, response, next);
  }
);

export default productCategoryRouter;
