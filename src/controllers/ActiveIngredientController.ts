import { NextFunction, Request, Response } from 'express';
import activeIngredientService from '../services/ActiveIngredientService';
import IController from '../controllers/IController';

/**
 * @classdesc Controller for the Active Ingredient Endpoint
 */
class ActiveIngredientController implements IController {
  /**
   *
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async findAll(response: Response, next: NextFunction) {
    try {
      const serviceResponse = await activeIngredientService.findAll();
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
  /**
   *
   * @param { Request } request
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async findById(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    try {
      const serviceResponse = await activeIngredientService.findById(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
  /**
   *
   * @param { Request } request
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const serviceResponse = await activeIngredientService.create(
        request.body
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
  /**
   *
   * @param { Request } request
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const serviceResponse = await activeIngredientService.update(
        request.body
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
  /**
   *
   * @param { Request } request
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async getUpdateHistory(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const id = request.params.id;
    try {
      const serviceResponse = await activeIngredientService.getUpdateHistory(
        id
      );
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ActiveIngredientController();
