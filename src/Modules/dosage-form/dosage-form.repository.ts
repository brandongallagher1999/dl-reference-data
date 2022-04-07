import { executeQuery, executeQueryWithValues } from "dlpos-core";
import DosageFormQueries from "./dosage-form.queries";

class DosageFormRepository {
  async findAll() {
    return executeQuery(DosageFormQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(DosageFormQueries.findById, [id]);
  }

  async findByDosageFormTypeId(dosageFormTypeId: number) {
    return executeQueryWithValues(DosageFormQueries.findByDosageFormTypeId, [
      dosageFormTypeId,
    ]);
  }
}

export default new DosageFormRepository();
