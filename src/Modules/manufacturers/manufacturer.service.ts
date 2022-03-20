import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";
import manufacturerRepository from "./manufacturer.repository";
import RefDataExcetpion from "../../exceptions/RefDataException";

class ManufacturerService {
  async findAll(): Promise<ServiceResponse> {
    let queryResult: QueryResult = await manufacturerRepository.findAll();
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
    let queryResult: QueryResult = await manufacturerRepository.findById(idNum);
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(404, `No manufacturer found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      return serviceResponse;
    }
  }
}

export default new ManufacturerService();
