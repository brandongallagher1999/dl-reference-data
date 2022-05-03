import { ServiceResponse } from "dlpos-core";
import { QueryResult } from "pg";
import updateHistoryRepository from "./update-history.repository";

class ReferenceDataUpdateHistoryService {
  async getUpdateHistory(tableName: string, refDataId: string) {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    let queryResult: QueryResult =
      await updateHistoryRepository.getUpdateHistory(
        tableName,
        parseInt(refDataId)
      );

    serviceResponse.itemCount = queryResult.rowCount;
    serviceResponse.data = queryResult.rows;

    return serviceResponse;
  }
}

export default new ReferenceDataUpdateHistoryService();
