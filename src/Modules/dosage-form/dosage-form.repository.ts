import {
  executeDependentQueriesWithValues,
  executeQuery,
  executeQueryWithValues,
} from "dlpos-core";
import DosageFormQueries from "./dosage-form.queries";
import DosageForm from "./dosage-form.dto";
import ReferenceDataUpdateHistoryQueries from "../update-history/update-history.queries";
import { Instruction } from "../../types";

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

  async create(newDosageForm: DosageForm, userId: number) {
    return executeDependentQueriesWithValues(
      DosageFormQueries.CREATE,
      [newDosageForm.name, newDosageForm.dosage_form_type_id],
      ReferenceDataUpdateHistoryQueries.CREATE_UPDATE_HISTORY_ENTRY,
      [
        Instruction.CREATE,
        DosageFormQueries.TABLE_NAME,
        userId,
        new Date(),
        newDosageForm,
      ]
    );
  }

  async update(updatedDosageForm: DosageForm, userId) {
    return executeDependentQueriesWithValues(
      DosageFormQueries.UPDATE,
      [
        updatedDosageForm.name,
        updatedDosageForm.dosage_form_type_id,
        updatedDosageForm.id,
      ],
      ReferenceDataUpdateHistoryQueries.CREATE_UPDATE_HISTORY_ENTRY,
      [
        Instruction.UPDATE,
        DosageFormQueries.TABLE_NAME,
        userId,
        new Date(),
        updatedDosageForm,
      ]
    );
  }
}

export default new DosageFormRepository();
