import { ServiceResponse } from "dlpos-core";
import { QueryResult } from "pg";
import QueryString from "qs";
import updateHistoryRepository from "./update-history.repository";
import UpdateHistoryValidator from "./update-history.validator";
import RefDataException from "../../exceptions/RefDataException";
import ReferenceDataUpdateHistoryEntry from "./update-history.dto";

class ReferenceDataUpdateHistoryService {
  async getUpdateHistory(queries: QueryString.ParsedQs) {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    let validatorResponse =
      UpdateHistoryValidator.validateQueryParameters(queries);

    if (validatorResponse.errors.length > 0) {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.addErrors(validatorResponse.errors);
      throw exception;
    }

    let queryResult: QueryResult =
      await updateHistoryRepository.getUpdateHistory(
        queries.tableName.toString(),
        parseInt(queries.refDataId.toString())
      );

    serviceResponse.itemCount = queryResult.rowCount;
    serviceResponse.data = queryResult.rows.map((entry) => {
      return ReferenceDataUpdateHistoryEntry.fromJson(entry);
    });

    return serviceResponse;
  }
}

export default new ReferenceDataUpdateHistoryService();
