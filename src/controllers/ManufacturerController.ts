import { NextFunction, Request, Response } from 'express';
import manufacturerService from '../services/ManufacturerService';
import IController from '../controllers/IController';

/**
 *
 */
class ManufacturerController implements IController {
  /**
   *
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Promise<Response | undefined> }
   */
  async findAll(
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const serviceResponse = await manufacturerService.findAll();
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
   * @return { Promise<Response | undefined> }
   */
  async findById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const id = request.params.id;
    try {
      const serviceResponse = await manufacturerService.findById(id);
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
   * @return { Promise<Response | undefined> }
   */
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const serviceResponse = await manufacturerService.create(request.body);
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
   * @return { Promise<Response | undefined> }
   */
  async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const serviceResponse = await manufacturerService.update(request.body);
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
   * @return { Promise<Response | undefined> }
   */
  async getUpdateHistory(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const id = request.params.id;
    try {
      const serviceResponse = await manufacturerService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ManufacturerController();
