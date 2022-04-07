import { NextFunction, Request, Response } from "express";
import tagService from "./tag.service";
import { ServiceResponse } from "dlpos-core";

class TagController {
  async findAll(response: Response, next: NextFunction) {
    try {
      let serviceResponse: ServiceResponse = await tagService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    try {
      let serviceResponse: ServiceResponse = await tagService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new TagController();
