import { NextFunction, Request, Response } from "express";
import supplierService from "./supplier.service";
import { ServiceResponse } from "dlpos-core";

class SupplierController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await supplierService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse = await supplierService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new SupplierController();
