import { ServiceResponse } from "dlpos-core";
import TagRepository from "../repositories/TagRepository";
import IService from "./IService";
import RefDataException from "../exceptions/RefDataException";
import { Tag, UpdateHistoryEntry } from "@prisma/client";
import {
  validateNewTagRequest,
  validateUpdateTagRequest,
} from "../utils/RequestValidator";
import {
  extractErrorMessagesFromValidationResult,
  formatUpdateHistory,
  safeParseInt,
} from "../utils/CommonUtils";

class TagService implements IService {
  async findAll(): Promise<ServiceResponse> {
    const queryResult = await TagRepository.findAll();
    const serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.length,
      data: queryResult,
    };
    return serviceResponse;
  }

  async findById(id: string): Promise<ServiceResponse> {
    const validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    const queryResult: Tag | null = await TagRepository.findById(
      validatedId.value
    );
    if (queryResult === null) {
      throw new RefDataException(404, `No tag found with id: ${id}`);
    } else {
      const serviceResponse: ServiceResponse = {
        status: 200,
        data: [queryResult],
      };
      return serviceResponse;
    }
  }

  async create(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200,
    };
    if (validateNewTagRequest(requestBody)) {
      await TagRepository.create(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateNewTagRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async update(requestBody: any): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = {
      status: 200,
    };
    if (validateUpdateTagRequest(requestBody)) {
      await TagRepository.update(requestBody);
    } else {
      const exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.errors = extractErrorMessagesFromValidationResult(
        validateUpdateTagRequest.errors
      );
      throw exception;
    }

    return serviceResponse;
  }

  async getUpdateHistory(id: string): Promise<ServiceResponse> {
    const validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    const queryResult: UpdateHistoryEntry[] | null =
      await TagRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(
        404,
        `No update history entries found for tag with id: ${id}`
      );
    } else {
      const serviceResponse: ServiceResponse = {
        status: 200,
        data: formatUpdateHistory(queryResult),
      };
      return serviceResponse;
    }
  }
}

export default new TagService();
