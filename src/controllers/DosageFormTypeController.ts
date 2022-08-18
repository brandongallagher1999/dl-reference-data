import { NextFunction, Request, Response } from 'express';
import dosageFormTypeService from '../services/DosageFormTypeService';
import IController from '../controllers/IController';

/**
 *
 */
class DosageFormTypeController implements IController {
  /**
   *
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async findAll(response: Response, next: NextFunction) {
    try {
      const serviceResponse = await dosageFormTypeService.findAll();
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
      const serviceResponse = await dosageFormTypeService.findById(id);
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
      const serviceResponse = await dosageFormTypeService.create(request.body);
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
      const serviceResponse = await dosageFormTypeService.update(request.body);
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
      const serviceResponse = await dosageFormTypeService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new DosageFormTypeController();
