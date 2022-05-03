import { executeQueryWithValues } from "dlpos-core";
import ReferenceDataUpdateHistoryQueries from "./update-history.queries";

class ReferenceDataUpdateHistoryRepository {
  async getUpdateHistory(tableName: string, refDataId: number) {
    return executeQueryWithValues(
      ReferenceDataUpdateHistoryQueries.GET_UPDATE_HISTORY,
      [tableName, refDataId]
    );
  }
}

export default new ReferenceDataUpdateHistoryRepository();
