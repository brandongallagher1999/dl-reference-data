import { executeQuery, executeQueryWithValues } from "dlpos-core";
import ProductCategoryQueries from "./product-category.queries";

class ProductCategoryRepository {
  async findAll() {
    return executeQuery(ProductCategoryQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(ProductCategoryQueries.findById, [id]);
  }
}

export default new ProductCategoryRepository();
