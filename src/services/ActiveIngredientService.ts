import { ServiceResponse } from 'dlpos-core';
import ActiveIngredientRepository from '../repositories/ActiveIngredientRepository';
import IService from './IService';
import RefDataException from '../exceptions/RefDataException';
import { ActiveIngredient, UpdateHistoryEntry } from '@prisma/client';
import {
  validateNewActiveIngredientRequest,
  validateUpdateActiveIngredientRequest
} from '../utils/RequestValidator';
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt
} from '../utils/CommonUtils';

class ActiveIngredientService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await ActiveIngredientRepository.findAll();
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
    const queryResult: ActiveIngredient | null =
      await ActiveIngredientRepository.findById(validatedId.value);
    if (queryResult === null) {
      throw new RefDataException(
        404,
        `No Active Ingredient found with id: ${id}`
      );
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
    if (validateNewActiveIngredientRequest(requestBody)) {
      await ActiveIngredientRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewActiveIngredientRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateUpdateActiveIngredientRequest(requestBody)) {
      await ActiveIngredientRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateActiveIngredientRequest.errors
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
      await ActiveIngredientRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for Active Ingredient with id: ${id}`
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

export default new ActiveIngredientService();
