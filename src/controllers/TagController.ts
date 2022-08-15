import { NextFunction, Request, Response } from "express";
import tagService from "../services/TagService";
import { ServiceResponse } from "dlpos-core";
import IController from "../controllers/IController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

class TagController implements IController {
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
  async create(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      let serviceResponse = await tagService.create(request.body);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
  async update(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      let serviceResponse = await tagService.update(request.body);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }

  async getUpdateHistory(request: Request, response: Response, next: NextFunction): Promise<any> {
    const id = request.params.id;
    try {
      let serviceResponse: ServiceResponse = await tagService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new TagController();