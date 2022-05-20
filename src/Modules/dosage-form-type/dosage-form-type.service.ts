import dosageFormTypeRepository from "./dosage-form-type.repository";
import RefDataException from "../../exceptions/RefDataException";
import { ServiceResponse } from "dlpos-core";
import { QueryResult } from "pg";
import CommonValidator from "../../utils/common-validator";
import DosageFormType from "./dosage-form-type.dto";
import DosageFormTypeValidator from "./dosage-form-type.validator";
import { Instruction } from "../../types";

class DosageFormTypeService {
  async findAll(): Promise<ServiceResponse> {
    let queryResult: QueryResult = await dosageFormTypeRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.rowCount,
      data: queryResult.rows.map((activeIngredient) => {
        return DosageFormType.fromJson(activeIngredient);
      }),
    };
    return serviceResponse;
  }

  async findById(id: string) {
    let validationResult = CommonValidator.validateNumber(id);
    if (!validationResult.isValid) {
      throw new RefDataException(400, `id [${id}] ${validationResult.error}`);
    }
    let queryResult: QueryResult = await dosageFormTypeRepository.findById(
      validationResult.validValue
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataException(
        404,
        `No dosage form type found for id: ${id}`
      );
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        itemCount: queryResult.rowCount,
        data: [DosageFormType.fromJson(queryResult.rows[0])],
      };
      return serviceResponse;
    }
  }

  async create(body: any) {
    let validationResult = DosageFormTypeValidator.validate(
      body,
      Instruction.CREATE
    );
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    if (validationResult.isValid) {
      await dosageFormTypeRepository.create(
        validationResult.validWriteRequest.dosageFormType,
        validationResult.validWriteRequest.userId
      );
      serviceResponse.message = "Dosage Form Type Created Successfully!";
    }
    if (validationResult.errors.length > 0) {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.addErrors(validationResult.errors);
      throw exception;
    }
    return serviceResponse;
  }

  async update(body: any) {
    let validationResult = DosageFormTypeValidator.validate(
      body,
      Instruction.UPDATE
    );
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    if (validationResult.isValid) {
      await dosageFormTypeRepository.update(
        validationResult.validWriteRequest.dosageFormType,
        validationResult.validWriteRequest.userId
      );
      serviceResponse.message = "Dosage Form Type Updated Successfully!";
    }
    if (validationResult.errors.length > 0) {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.addErrors(validationResult.errors);
      throw exception;
    }
    return serviceResponse;
  }
}

export default new DosageFormTypeService();
