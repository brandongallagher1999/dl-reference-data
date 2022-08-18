import { ServiceResponse } from 'dlpos-core';
import DosageFormTypeRepository from '../repositories/DosageFormTypeRepository';
import IService from './IService';
import RefDataException from '../exceptions/RefDataException';
import { DosageFormType, UpdateHistoryEntry } from '@prisma/client';
import {
  validateNewDosageFormTypeRequest,
  validateUpdateDosageFormTypeRequest
} from '../utils/RequestValidator';
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt
} from '../utils/CommonUtils';

class DosageFormTypeService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await DosageFormTypeRepository.findAll();
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
    const queryResult: DosageFormType | null =
      await DosageFormTypeRepository.findById(validatedId.value);
    if (queryResult === null) {
      throw new RefDataException(404, `No DosageFormType found with id: ${id}`);
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
    if (validateNewDosageFormTypeRequest(requestBody)) {
      await DosageFormTypeRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewDosageFormTypeRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateUpdateDosageFormTypeRequest(requestBody)) {
      await DosageFormTypeRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateDosageFormTypeRequest.errors
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
      await DosageFormTypeRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for DosageFormType with id: ${id}`
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

export default new DosageFormTypeService();
