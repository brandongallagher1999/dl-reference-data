import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";
import unitRepository from "./unit.repository";
import RefDataException from "../../exceptions/RefDataException";

class UnitService {
  async findAll() {
    let queryResult: QueryResult = await unitRepository.findAll();
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
      throw new RefDataException(400, error.message);
    }
    let queryResult: QueryResult = await unitRepository.findById(idNum);
    if (queryResult.rowCount < 1) {
      throw new RefDataException(404, `No unit found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      return serviceResponse;
    }
  }

  async findByUnitType(unitTypeId: string) {
    let numUnitTypeId: number = Number(unitTypeId);
    if (Number.isNaN(numUnitTypeId)) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult = await unitRepository.findByUnitTypeId(
      numUnitTypeId
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataException(
        404,
        `No unit found for unit type id: ${unitTypeId}`
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

export default new UnitService();
