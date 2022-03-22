import dosageFormTypeRepository from "../dosage-form-type/dosage-form-type.repository";
import RefDataException from "../../exceptions/RefDataException";
import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";

class DosageFormTypeService {
  async findAll(): Promise<ServiceResponse> {
    let queryResult: QueryResult = await dosageFormTypeRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.rowCount,
      data: queryResult.rows,
    };
    return serviceResponse;
  }

  async findById(id: string) {
    let numId: number = Number(id);
    if (Number.isNaN(numId)) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult = await dosageFormTypeRepository.findById(
      numId
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataException(404, `No dosage form found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        itemCount: queryResult.rowCount,
        data: queryResult.rows,
      };
      return serviceResponse;
    }
  }
}

export default new DosageFormTypeService();
