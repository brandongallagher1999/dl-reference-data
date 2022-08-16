import { ServiceResponse } from 'dlpos-core';
import manufacturerRepository from '../repositories/manufacturerRepository';
import IService from './IService';
import RefDataException from '../exceptions/RefDataException';
import { Manufacturer, UpdateHistoryEntry } from '@prisma/client';
import {
  validateNewManufacturerRequest,
  validateUpdateManufacturerRequest
} from '../utils/RequestValidator';
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt
} from '../utils/CommonUtils';

class ManufacturerService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await manufacturerRepository.findAll();
    const serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.length,
      data: queryResult
    };
    return serviceResponse;
  }

  async findById(id: string): Promise<ServiceResponse> {
    const validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, 'id provided is not a valid number');
    }
    const queryResult: Manufacturer | null =
      await manufacturerRepository.findById(validatedId.value);
    if (queryResult === null) {
      throw new RefDataException(404, `No Manufacturer found with id: ${id}`);
    } else {
      const serviceResponse: ServiceResponse = {
        status: 200,
        data: [queryResult]
      };
      return serviceResponse;
    }
  }

  async create(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateNewManufacturerRequest(requestBody)) {
      await manufacturerRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewManufacturerRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateUpdateManufacturerRequest(requestBody)) {
      await manufacturerRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateManufacturerRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async getUpdateHistory(id: string): Promise<ServiceResponse> {
    const validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, 'id provided is not a valid number');
    }
    const queryResult: UpdateHistoryEntry[] | null =
      await manufacturerRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for Manufacturer with id: ${id}`
      );
    } else {
      const serviceResponse: ServiceResponse = {
        status: 200,
        data: formatUpdateHistory(queryResult)
      };
      return serviceResponse;
    }
  }
}

export default new ManufacturerService();
