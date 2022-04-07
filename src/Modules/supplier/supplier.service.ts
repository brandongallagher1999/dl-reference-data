import { ServiceResponse } from "dlpos-core";
import { QueryResult } from "pg";
import supplierRepository from "./supplier.repository";
import RefDataException from "../../exceptions/RefDataException";

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
    let numId: number = Number(id);
    if (Number.isNaN(numId)) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult = await supplierRepository.findById(numId);
    if (queryResult.rowCount < 1) {
      throw new RefDataException(404, `No supplier found for id: ${id}`);
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
