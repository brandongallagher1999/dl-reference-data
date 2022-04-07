import { ServiceResponse } from "dlpos-core";
import productCategoryService from "./product-category.service";
import { Request, Response, NextFunction } from "express";

class ProductCategoryController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await productCategoryService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse =
        await productCategoryService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductCategoryController();
