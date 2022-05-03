import { ServiceResponse } from "dlpos-core";
import activeIngredientService from "./active-ingredient.service";
import { NextFunction, Request, Response } from "express";

class ActiveIngredientController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await activeIngredientService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse =
        await activeIngredientService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await activeIngredientService.create(request.body, request.query);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await activeIngredientService.update(request.body, request.query);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ActiveIngredientController();
