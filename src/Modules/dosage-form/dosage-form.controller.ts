import { NextFunction, Request, Response } from "express";
import { ServiceResponse } from "dlpos-core";
import dosageFormService from "./dosage-form.service";

class DosageFormController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await dosageFormService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await dosageFormService.findById(
        request.params.id
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findByDosageFormsByTypeId(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      let serviceResponse: ServiceResponse =
        await dosageFormService.findByDosageFormsByTypeId(
          request.params.dosageFormTypeId
        );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await dosageFormService.create(
        request.body,
        request.query
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await dosageFormService.update(
        request.body,
        request.query
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new DosageFormController();
