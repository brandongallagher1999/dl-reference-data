import { NextFunction, Request, Response } from "express";
import paymentMethodService from "./payment-method.service";
import { ServiceResponse } from "dlpos-core";
class PaymentMethodConroller {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse =
        await paymentMethodService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = request.params.id;
      let serviceResponse: ServiceResponse =
        await paymentMethodService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentMethodConroller();
