import { executeQuery, executeQueryWithValues } from "dlpos-core";
import DosageFormQueries from "./dosage-form.queries";

class DosageFormRepository {
  async findAll() {
    return executeQuery(DosageFormQueries.FIND_ALL);
  }

  async findById(id: number) {
    return executeQueryWithValues(DosageFormQueries.FIND_BY_ID, [id]);
  }

  async findByDosageFormTypeId(dosageFormTypeId: number) {
    return executeQueryWithValues(
      DosageFormQueries.FIND_BY_DOSAGE_FORM_TYPE_ID,
      [dosageFormTypeId]
    );
  }

  async create() {}

  async update() {}
}

export default new DosageFormRepository();
