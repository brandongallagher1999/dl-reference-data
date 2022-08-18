import { ServiceResponse } from 'dlpos-core';
import UnitRepository from '../repositories/UnitRepository';
import IService from './IService';
import RefDataException from '../exceptions/RefDataException';
import { Unit, UpdateHistoryEntry } from '@prisma/client';
import {
  validateNewUnitRequest,
  validateUpdateUnitRequest
} from '../utils/RequestValidator';
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt
} from '../utils/CommonUtils';

class UnitService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await UnitRepository.findAll();
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
    const queryResult: Unit | null = await UnitRepository.findById(
      validatedId.value
    );
    if (queryResult === null) {
      throw new RefDataException(404, `No Unit found with id: ${id}`);
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
    if (validateNewUnitRequest(requestBody)) {
      await UnitRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewUnitRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateUpdateUnitRequest(requestBody)) {
      await UnitRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateUnitRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async findByUnitTypeId(UnitTypeId: string) {
    const validatedId = safeParseInt(UnitTypeId);
    if (!validatedId.isValid) {
      throw new RefDataException(
        400,
        'UnitTypeId provided is not a valid number'
      );
    }
    const queryResult: Unit[] = await UnitRepository.findByUnitTypeId(
      validatedId.value
    );
    if (queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No Units found with UnitTypeId: ${UnitTypeId}`
      );
    } else {
      const serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult
      };
      return serviceResponse;
    }
  }

  async getUpdateHistory(id: string): Promise<ServiceResponse> {
    const validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, 'id provided is not a valid number');
    }
    const queryResult: UpdateHistoryEntry[] | null =
      await UnitRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for Unit with id: ${id}`
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

export default new UnitService();
