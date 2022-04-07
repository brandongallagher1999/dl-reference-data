import { NextFunction, Request, Response } from "express";
import unitService from "./unit.service";
import { ServiceResponse } from "dlpos-core";

class UnitController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await unitService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse = await unitService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findByUnitType(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const unitTypeId = request.params.unitTypeId;
      let serviceResponse: ServiceResponse = await unitService.findByUnitType(
        unitTypeId
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new UnitController();
