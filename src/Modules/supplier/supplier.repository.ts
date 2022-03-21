import { executeQuery, executeQueryWithValues } from "../../db";
import SupplierQueries from "./supplier.queries";

class SupplierRepository {
  async findAll() {
    return executeQuery(SupplierQueries.findAll);
  }

  async findById(id: bigint) {
    return executeQueryWithValues(SupplierQueries.findById, [id]);
  }
}

export default new SupplierRepository();
