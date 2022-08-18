import { ServiceResponse } from 'dlpos-core';
import dosageFormRepository from '../repositories/DosageFormRepository';
import IService from './IService';
import RefDataException from '../exceptions/RefDataException';
import { DosageForm, UpdateHistoryEntry } from '@prisma/client';
import {
  validateNewDosageFormRequest,
  validateUpdateDosageFormRequest
} from '../utils/RequestValidator';
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt
} from '../utils/CommonUtils';

class DosageFormService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await dosageFormRepository.findAll();
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
    const queryResult: DosageForm | null = await dosageFormRepository.findById(
      validatedId.value
    );
    if (queryResult === null) {
      throw new RefDataException(404, `No Dosage Form found with id: ${id}`);
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
    if (validateNewDosageFormRequest(requestBody)) {
      await dosageFormRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewDosageFormRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateUpdateDosageFormRequest(requestBody)) {
      await dosageFormRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateDosageFormRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async findByDosageFormTypeId(dosageFormTypeId: string) {
    const validatedId = safeParseInt(dosageFormTypeId);
    if (!validatedId.isValid) {
      throw new RefDataException(
        400,
        'dosageFormTypeId provided is not a valid number'
      );
    }
    const queryResult: DosageForm[] =
      await dosageFormRepository.findByDosageFormId(validatedId.value);
    if (queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No Dosage Forms found with dosageFormTypeId: ${dosageFormTypeId}`
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
      await dosageFormRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for Dosage Form with id: ${id}`
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

export default new DosageFormService();
