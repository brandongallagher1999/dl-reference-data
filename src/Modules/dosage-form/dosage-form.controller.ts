import { NextFunction, Request, Response } from "express";
import { ServiceResponse } from "../../types";
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
      const id = request.params.id;
      let serviceResponse: ServiceResponse = await dosageFormService.findById(
        id
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findByDosageFormTypeId(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dosageFormTypeId = request.params.dosageFormTypeId;
      let serviceResponse: ServiceResponse =
        await dosageFormService.findByDosageFormTypeId(dosageFormTypeId);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new DosageFormController();
