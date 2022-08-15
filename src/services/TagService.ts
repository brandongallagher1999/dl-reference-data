import { ServiceResponse } from "dlpos-core";
import TagRepository from "../repositories/TagRepository";
import IService from "./IService";
import RefDataException from "../exceptions/RefDataException";
import { Tag, UpdateHistoryEntry } from "@prisma/client";
import { validate_new_tag_request, validate_update_tag_request } from '../utils/RequestValidator';
import { extractErrorMessagesFromValidationResult, formatUpdateHistory, safeParseInt } from "../utils/CommonUtils";

class TagService implements IService {
  async findAll(): Promise<ServiceResponse> {
    let queryResult = await TagRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.length,
      data: queryResult,
    };
    return serviceResponse;
  }

  async findById(id: string): Promise<ServiceResponse> {
    let validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: Tag | null = await TagRepository.findById(validatedId.value);
    if (queryResult === null) {
      throw new RefDataException(404, `No tag found with id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: [queryResult],
      };
      return serviceResponse;
    }
  }

  async create(requestBody: any): Promise<ServiceResponse> {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };
    if (validate_new_tag_request(requestBody)) {
      await TagRepository.create(requestBody);
    } else {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.errors = extractErrorMessagesFromValidationResult(validate_new_tag_request.errors);
      throw exception;
    }

    return serviceResponse;
  }
  
  async update(requestBody: any): Promise<ServiceResponse> {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };
    if (validate_update_tag_request(requestBody)) {
      await TagRepository.update(requestBody);
    } else {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.errors = extractErrorMessagesFromValidationResult(validate_update_tag_request.errors);
      throw exception;
    }

    return serviceResponse;
  }

  async getUpdateHistory(id: string): Promise<ServiceResponse> {
    let validatedId = safeParseInt(id);
    if (!validatedId.isValid) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: UpdateHistoryEntry[] | null = await TagRepository.getUpdateHistory(validatedId.value);
    if (queryResult === null || queryResult.length <= 0) {
      throw new RefDataException(404, `No update history entries found for tag with id: ${id}`);
    } else {
      queryResult.forEach((result) => {
      });
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: formatUpdateHistory(queryResult),
      };
      return serviceResponse;
    }
  }
}

export default new TagService();