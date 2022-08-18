import { ServiceResponse } from 'dlpos-core';
import productCategoryRepository from '../repositories/ProductCategoryRepository';
import IService from './IService';
import RefDataException from '../exceptions/RefDataException';
import { ProductCategory, UpdateHistoryEntry } from '@prisma/client';
import {
  validateNewProductCategoryRequest,
  validateUpdateProductCategoryRequest
} from '../utils/RequestValidator';
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt
} from '../utils/CommonUtils';

class ProductCategoryService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await productCategoryRepository.findAll();
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
    const queryResult: ProductCategory | null =
      await productCategoryRepository.findById(validatedId.value);
    if (queryResult === null) {
      throw new RefDataException(
        404,
        `No Product Category found with id: ${id}`
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
    if (validateNewProductCategoryRequest(requestBody)) {
      await productCategoryRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewProductCategoryRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200
    };
    if (validateUpdateProductCategoryRequest(requestBody)) {
      await productCategoryRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        'Invalid request.'
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateProductCategoryRequest.errors
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
      await productCategoryRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for Product Category with id: ${id}`
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

export default new ProductCategoryService();
