import {
  executeQuery,
  executeQueryWithValues,
  executeDependentQueriesWithValues,
} from "dlpos-core";
import ActiveIngredientQueries from "./active-ingredient.queries";
import ActiveIngredient from "./active-ingredient.dto";
import ReferenceDataUpdateHistoryQueries from "../update-history/update-history.queries";
import { Instruction } from "../../types";

class ActiveIngredientRepository {
  async findAll() {
    return executeQuery(ActiveIngredientQueries.FIND_ALL);
  }

  async findById(id: number) {
    return executeQueryWithValues(ActiveIngredientQueries.FIND_BY_ID, [id]);
  }

  async create(newActiveIngredient: ActiveIngredient, userId: number) {
    return executeDependentQueriesWithValues(
      ActiveIngredientQueries.CREATE,
      [newActiveIngredient.name],
      ReferenceDataUpdateHistoryQueries.CREATE_UPDATE_HISTORY_ENTRY,
      [
        Instruction.CREATE,
        ActiveIngredientQueries.TABLE_NAME,
        userId,
        new Date(),
        newActiveIngredient,
      ]
    );
  }

  async update(updatedActiveIngredient: ActiveIngredient, userId: number) {
    return executeDependentQueriesWithValues(
      ActiveIngredientQueries.UPDATE,
      [updatedActiveIngredient.name, updatedActiveIngredient.id],
      ReferenceDataUpdateHistoryQueries.CREATE_UPDATE_HISTORY_ENTRY,
      [
        Instruction.UPDATE,
        ActiveIngredientQueries.TABLE_NAME,
        userId,
        new Date(),
        updatedActiveIngredient,
      ]
    );
  }
}

export default new ActiveIngredientRepository();
