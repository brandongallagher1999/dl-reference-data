import { executeQuery, executeQueryWithValues } from "dlpos-core";
import UnitQueries from "./unit.queries";

class UnitRepository {
  async findAll() {
    return executeQuery(UnitQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(UnitQueries.findById, [id]);
  }

  async findByUnitTypeId(unitTypeId: number) {
    return executeQueryWithValues(UnitQueries.findByType, [unitTypeId]);
  }
}

export default new UnitRepository();
