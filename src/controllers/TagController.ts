import { NextFunction, Request, Response } from 'express';
import tagService from '../services/TagService';
import IController from '../controllers/IController';

/**
 *
 */
class TagController implements IController {
  /**
   *
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async findAll(response: Response, next: NextFunction) {
    try {
      const serviceResponse = await tagService.findAll();
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
      const serviceResponse = await tagService.findById(id);
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
      const serviceResponse = await tagService.create(request.body);
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
      const serviceResponse = await tagService.update(request.body);
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
      const serviceResponse = await tagService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new TagController();
