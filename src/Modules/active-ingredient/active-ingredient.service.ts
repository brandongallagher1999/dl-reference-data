import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";
import activeIngredientRepository from "./active-ingredient.repository";
import RefDataExcetpion from "../../exceptions/RefDataException";

class ActiveIngredientService {
  async findAll() {
    let queryResult: QueryResult = await activeIngredientRepository.findAll();
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

    let queryResult: QueryResult = await activeIngredientRepository.findById(
      idNum
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(
        404,
        `No active ingredient found for id: ${id}`
      );
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      return serviceResponse;
    }
  }
}

export default new ActiveIngredientService();
