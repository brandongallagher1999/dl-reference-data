import { executeQuery, executeQueryWithValues } from "../../db";
import ProductCategoryQueries from "./product-category.queries";

class ProductCategoryRepository {
  async findAll() {
    return executeQuery(ProductCategoryQueries.findAll);
  }

  async findById(id: bigint) {
    return executeQueryWithValues(ProductCategoryQueries.findById, [id]);
  }
}

export default new ProductCategoryRepository();
