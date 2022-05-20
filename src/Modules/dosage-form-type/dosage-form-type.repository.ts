import DosageFormQueries from "./dosage-form-type.queries";
import ReferenceDataUpdateHistoryQueries from "../update-history/update-history.queries";
import {
  executeQuery,
  executeQueryWithValues,
  executeDependentQueriesWithValues,
} from "dlpos-core";
import DosageFormType from "./dosage-form-type.dto";
import { Instruction } from "../../types";

class DosageFormRepository {
  async findAll() {
    return executeQuery(DosageFormQueries.FIND_ALL);
  }

  async findById(id: number) {
    return executeQueryWithValues(DosageFormQueries.FIND_BY_ID, [id]);
  }

  async create(newDosageFormType: DosageFormType, userId: number) {
    return executeDependentQueriesWithValues(
      DosageFormQueries.CREATE,
      [newDosageFormType.name],
      ReferenceDataUpdateHistoryQueries.CREATE_UPDATE_HISTORY_ENTRY,
      [
        Instruction.CREATE,
        DosageFormQueries.TABLE_NAME,
        userId,
        new Date(),
        newDosageFormType,
      ]
    );
  }

  async update(updatedDosageFormType: DosageFormType, userId: number) {
    return executeDependentQueriesWithValues(
      DosageFormQueries.UPDATE,
      [updatedDosageFormType.name, updatedDosageFormType.id],
      ReferenceDataUpdateHistoryQueries.CREATE_UPDATE_HISTORY_ENTRY,
      [
        Instruction.UPDATE,
        DosageFormQueries.TABLE_NAME,
        userId,
        new Date(),
        updatedDosageFormType,
      ]
    );
  }
}

export default new DosageFormRepository();
