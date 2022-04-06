import UnitTypeQueries from "./unit-type.queries";
import { executeQuery, executeQueryWithValues } from "dlpos-core";

class UnitTypeRespository {
  async findAll() {
    return executeQuery(UnitTypeQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(UnitTypeQueries.findById, [id]);
  }
}

export default new UnitTypeRespository();
