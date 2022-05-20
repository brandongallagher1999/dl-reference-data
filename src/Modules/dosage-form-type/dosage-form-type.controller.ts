import { NextFunction, Request, Response } from "express";
import dosageFormTypeService from "./dosage-form-type.service";
import { ServiceResponse } from "dlpos-core";

class DosageFormTypeController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await dosageFormTypeService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse =
        await dosageFormTypeService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await dosageFormTypeService.create(
        request.body
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await dosageFormTypeService.update(
        request.body
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new DosageFormTypeController();
