import { NextFunction, Request, Response } from 'express';
import paymentMethodService from '../services/PaymentMethodService';
import IController from '../controllers/IController';

/**
 *
 */
class PaymentMethodController implements IController {
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
      const serviceResponse = await paymentMethodService.findAll();
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
      const serviceResponse = await paymentMethodService.findById(id);
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
      const serviceResponse = await paymentMethodService.create(request.body);
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
      const serviceResponse = await paymentMethodService.update(request.body);
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
      const serviceResponse = await paymentMethodService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentMethodController();
