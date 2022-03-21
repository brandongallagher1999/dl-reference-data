import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";
import supplierRepository from "./supplier.repository";
import RefDataExcetpion from "../../exceptions/RefDataException";

class SupplierService {
  async findAll(): Promise<ServiceResponse> {
    let queryResult: QueryResult = await supplierRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.rowCount,
      data: queryResult.rows,
    };

    serviceResponse.itemCount = queryResult.rowCount;
    serviceResponse.data = queryResult.rows;
    return serviceResponse;
  }

  async findById(id: string) {
    let idNum: bigint;
    try {
      idNum = BigInt(id);
    } catch (error) {
      throw new RefDataExcetpion(400, error.message);
    }
    let queryResult: QueryResult = await supplierRepository.findById(idNum);
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(404, `No supplier found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      return serviceResponse;
    }
  }
}

export default new SupplierService();
