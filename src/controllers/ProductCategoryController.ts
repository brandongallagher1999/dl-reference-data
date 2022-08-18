import { NextFunction, Request, Response } from 'express';
import productCategoryService from '../services/ProductCategoryService';
import IController from '../controllers/IController';

/**
 *
 */
class ProductCategoryController implements IController {
  /**
   *
   * @param { Response } response
   * @param { NextFunction } next
   * @return { Response | undefined }
   */
  async findAll(response: Response, next: NextFunction) {
    try {
      const serviceResponse = await productCategoryService.findAll();
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
      const serviceResponse = await productCategoryService.findById(id);
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
      const serviceResponse = await productCategoryService.create(request.body);
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
      const serviceResponse = await productCategoryService.update(request.body);
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
      const serviceResponse = await productCategoryService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductCategoryController();
