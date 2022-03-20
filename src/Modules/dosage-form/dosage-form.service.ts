import RefDataExcetpion from "../../exceptions/RefDataException";
import { QueryResult } from "pg";
import { ServiceResponse } from "../../types";
import dosageFormRepository from "./dosage-form.repository";

class DosageFormService {
  async findAll() {
    let queryResult: QueryResult = await dosageFormRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.rowCount,
      data: queryResult.rows,
    };
    return serviceResponse;
  }

  async findById(id: string) {
    let idNum: bigint;
    try {
      idNum = BigInt(id);
    } catch (error) {
      throw new RefDataExcetpion(400, error.message);
    }
    let queryResult: QueryResult = await dosageFormRepository.findById(idNum);
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(404, `No dosage form found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      serviceResponse.data = queryResult.rows[0];
      return serviceResponse;
    }
  }

  async findByDosageFormTypeId(dosageFormTypeId: string) {
    let numDosageFormTpypeId: number = Number(dosageFormTypeId);
    if (Number.isNaN(numDosageFormTpypeId)) {
      throw new RefDataExcetpion(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult =
      await dosageFormRepository.findByDosageFormTypeId(numDosageFormTpypeId);
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(
        404,
        `No dosage forms found for dosage form type id: ${dosageFormTypeId}`
      );
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
export default new DosageFormService();
