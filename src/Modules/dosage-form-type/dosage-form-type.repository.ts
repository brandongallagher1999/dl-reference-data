import DosageFormQueries from "./dosage-form-type.queries";
import { executeQuery, executeQueryWithValues } from "../../db";

class DosageFormRespository {
  async findAll() {
    return executeQuery(DosageFormQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(DosageFormQueries.findById, [id]);
  }
}

export default new DosageFormRespository();
