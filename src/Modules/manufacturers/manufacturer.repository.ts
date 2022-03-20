import { executeQuery, executeQueryWithValues } from "../../db";
import ManufacturerQueries from "./manufacturer.queries";

class ManufacturerRepository {
  async findAll() {
    return executeQuery(ManufacturerQueries.findAll);
  }

  async findById(id: bigint) {
    return executeQueryWithValues(ManufacturerQueries.findById, [id]);
  }
}

export default new ManufacturerRepository();
