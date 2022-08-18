import { NextFunction, Request, Response } from 'express';
import dosageFormService from '../services/DosageFormService';
import IController from '../controllers/IController';

/**
 *
 */
class DosageFormController implements IController {
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
      const serviceResponse = await dosageFormService.findAll();
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
      const serviceResponse = await dosageFormService.findById(id);
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
      const serviceResponse = await dosageFormService.create(request.body);
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
      const serviceResponse = await dosageFormService.update(request.body);
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
  async findByDosageFormTypeId(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const dosageFormTypeId = request.params.dosageFormTypeId;
    try {
      const serviceResponse = await dosageFormService.findByDosageFormTypeId(
        dosageFormTypeId
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
   * @return { Promise<Response | undefined> }
   */
  async getUpdateHistory(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    const id = request.params.id;
    try {
      const serviceResponse = await dosageFormService.getUpdateHistory(id);
      return response.status(serviceResponse.status).send(serviceResponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new DosageFormController();
