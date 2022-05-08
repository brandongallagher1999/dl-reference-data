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
    let validationResult = CommonValidator.isNumber(id);
    if (!validationResult.isValid) {
      throw new RefDataException(400, `id [${id}] ${validationResult.error}`);
    }
    let queryResult: QueryResult = await dosageFormTypeRepository.findById(
      validationResult.validValue
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataException(404, `No dosage form found for id: ${id}`);
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
    let bla = DosageFormTypeValidator.validate(body, Instruction.CREATE);
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    return serviceResponse;
  }

  async update() {}
}

export default new DosageFormTypeService();
