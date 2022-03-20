import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";
import paymentMethodRepository from "./payment-method.repository";
import RefDataExcetpion from "../../exceptions/RefDataException";

class PaymentMethodService {
  async findAll(): Promise<ServiceResponse> {
    let queryResult: QueryResult = await paymentMethodRepository.findAll();
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
    let queryResult: QueryResult = await paymentMethodRepository.findById(
      idNum
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(404, `No payment method found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      return serviceResponse;
    }
  }
}

export default new PaymentMethodService();
