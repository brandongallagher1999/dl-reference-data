import { executeQuery, executeQueryWithValues } from "../../db";
import UnitQueries from "./unit.queries";

class UnitRepository {
  async findAll() {
    return executeQuery(UnitQueries.findAll);
  }

  async findById(id: bigint) {
    return executeQueryWithValues(UnitQueries.findById, [id]);
  }

  async findByUnitTypeId(unitTypeId: number) {
    return executeQueryWithValues(UnitQueries.findByType, [unitTypeId]);
  }
}

export default new UnitRepository();
