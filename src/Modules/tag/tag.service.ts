import { ServiceResponse } from "../../types";
import { QueryResult } from "pg";
import tagRepository from "./tag.repository";
import RefDataExcetpion from "../../exceptions/RefDataException";

class TagService {
  async findAll() {
    let queryResult: QueryResult = await tagRepository.findAll();
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

    let queryResult: QueryResult = await tagRepository.findById(idNum);
    if (queryResult.rowCount < 1) {
      throw new RefDataExcetpion(404, `No tag found with id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: queryResult.rows[0],
      };
      return serviceResponse;
    }
  }
}

export default new TagService();
