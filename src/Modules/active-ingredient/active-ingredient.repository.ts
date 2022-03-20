import { executeQuery, executeQueryWithValues } from "../../db";
import ActiveIngredientQueries from "./active-ingredient.queries";

class ActiveIngredientRepository {
  async findAll() {
    return executeQuery(ActiveIngredientQueries.findAll);
  }

  async findById(id: bigint) {
    return executeQueryWithValues(ActiveIngredientQueries.findById, [id]);
  }
}

export default new ActiveIngredientRepository();
