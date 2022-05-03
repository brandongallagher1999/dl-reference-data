import QueryString from "qs";

class UpdateHistoryValidator {
  static validateQueryParameters(queries: QueryString.ParsedQs) {
    let tableName = queries?.tableName;
    let refDataId = queries?.refDataId;

    let errors: string[] = [];
    let valid: boolean = false;

    if (tableName === undefined) {
      errors.push(`required query param tableName is undefined!`);
    }

    if (refDataId === undefined) {
      errors.push(`required query param refDataId is undefined!`);
    } else if (Number.isNaN(parseInt(refDataId.toString()))) {
      errors.push(`required query param refDataId is not a valid number!`);
    }
    if (errors.length === 0) {
      valid = true;
    }
    return {
      valid: valid,
      errors: errors,
    };
  }
}

export default UpdateHistoryValidator;
