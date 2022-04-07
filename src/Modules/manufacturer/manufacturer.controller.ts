import { NextFunction, Request, Response } from "express";
import manufacturerService from "./manufacturer.service";
import { ServiceResponse } from "dlpos-core";
class ManufacturerController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await manufacturerService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse = await manufacturerService.findById(
        id
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ManufacturerController();
