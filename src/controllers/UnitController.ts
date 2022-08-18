import { NextFunction, Request, Response } from 'express';
import unitService from '../services/UnitService';
import IController from '../controllers/IController';

/**
 *
 */
class UnitController implements IController {
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
      const serviceResponse = await unitService.findAll();
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
      const serviceResponse = await unitService.findById(id);
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
      const serviceResponse = await unitService.create(request.body);
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
      const serviceResponse = await unitService.update(request.body);
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
  async findByUnitTypeId(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const UnitTypeId = request.params.unitTypeId;
    try {
      const serviceResponse = await unitService.findByUnitTypeId(UnitTypeId);
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
      const serviceResponse = await unitService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new UnitController();
