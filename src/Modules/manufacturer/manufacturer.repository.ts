import { executeQuery, executeQueryWithValues } from "dlpos-core";
import ManufacturerQueries from "./manufacturer.queries";

class ManufacturerRepository {
  async findAll() {
    return executeQuery(ManufacturerQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(ManufacturerQueries.findById, [id]);
  }
}

export default new ManufacturerRepository();
