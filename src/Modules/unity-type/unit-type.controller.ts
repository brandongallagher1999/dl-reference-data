import { NextFunction, Request, Response } from "express";
import unitTypeService from "./unit-type.service";
import { ServiceResponse } from "dlpos-core";

class DosageFormTypeController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await unitTypeService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse = await unitTypeService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new DosageFormTypeController();
