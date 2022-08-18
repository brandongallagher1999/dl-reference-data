import { NextFunction, Request, Response } from 'express';
import UnitTypeService from '../services/UnitTypeService';
import IController from '../controllers/IController';

/**
 *
 */
class UnitTypeController implements IController {
  /**
   *
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async findAll(response: Response, next: NextFunction) {
    try {
      const serviceResponse = await UnitTypeService.findAll();
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
      const serviceResponse = await UnitTypeService.findById(id);
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
      const serviceResponse = await UnitTypeService.create(request.body);
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
      const serviceResponse = await UnitTypeService.update(request.body);
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
      const serviceResponse = await UnitTypeService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new UnitTypeController();
