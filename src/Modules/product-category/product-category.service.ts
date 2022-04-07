import { ServiceResponse } from "dlpos-core";
import { QueryResult } from "pg";
import productCategoryRepository from "./product-category.repository";
import RefDataException from "../../exceptions/RefDataException";

class ProductCategoryService {
  async findAll() {
    let queryResult: QueryResult = await productCategoryRepository.findAll();
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
    let queryResult: QueryResult = await productCategoryRepository.findById(
      numId
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataException(
        404,
        `No product category found for id: ${id}`
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

export default new ProductCategoryService();
