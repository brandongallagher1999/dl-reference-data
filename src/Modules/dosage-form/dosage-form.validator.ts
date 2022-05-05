import QueryString from "qs";
import DosageForm from "./dosage-form.dto";

class DosageFormValidator {
  static validateCreateRequest(
    dosageForm: DosageForm,
    queryParams: QueryString.ParsedQs
  ) {
    let userId = queryParams?.userId;

    let errors: string[] = [];
    let valid: boolean = false;

    if (userId === undefined) {
      errors.push("required query param userId is undefined!");
    } else if (Number.isNaN(parseInt(userId.toString()))) {
      errors.push("provided query param userId is not a valid number!");
    }
    if (dosageForm?.name === undefined) {
      errors.push("missing dosage form required field name!");
    }
    if (dosageForm?.dosage_form_type_id === undefined) {
      errors.push("missing dosage form required field name!");
    }
    if (dosageForm?.dosage_form_type_id === undefined) {
      errors.push("missing dosage form type id required field name!");
    } else if (Number.isNaN(dosageForm.dosage_form_type_id)) {
      errors.push("dosage form type id is not a valid number!");
    }
    if (errors.length === 0) {
      valid = true;
    }
    return {
      valid: valid,
      errors: errors,
    };
  }

  static validateUpdateRequest(
    dosageForm: DosageForm,
    queryParams: QueryString.ParsedQs
  ) {
    let userId = queryParams?.userId;

    let errors: string[] = [];
    let valid: boolean = false;

    if (dosageForm?.id === undefined) {
      errors.push("missing dosage form required field id");
    } else if (Number.isNaN(dosageForm.id)) {
      errors.push("id is not a valid number!");
    }
    if (userId === undefined) {
      errors.push("required query param userId is undefined!");
    } else if (Number.isNaN(parseInt(userId.toString()))) {
      errors.push("provided query param userId is not a valid number!");
    }
    if (dosageForm?.name === undefined) {
      errors.push("missing dosage form required field name!");
    }
    if (dosageForm?.dosage_form_type_id === undefined) {
      errors.push("missing dosage form required field dosage form type!");
    } else if (Number.isNaN(dosageForm.dosage_form_type_id)) {
      errors.push("dosage form type id is not a valid number!");
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

export default DosageFormValidator;
