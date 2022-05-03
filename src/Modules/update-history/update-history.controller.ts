import { NextFunction, Request, Response } from "express";
import { ServiceResponse } from "dlpos-core";
import referenceDataUpdateHistoryService from "./update-history.service";

class ReferenceDataUpdateHistoryController {
  async getUpdateHistory(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      let serviceResponse: ServiceResponse =
        await referenceDataUpdateHistoryService.getUpdateHistory(request.query);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ReferenceDataUpdateHistoryController();
