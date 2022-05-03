import QueryString from "qs";
import ActiveIngredient from "./active-ingredient.dto";

class ActiveIngredientValidator {
  static validateRequest(
    activeIngredient: ActiveIngredient,
    queries: QueryString.ParsedQs
  ) {
    let userId = queries?.userId;

    let errors: string[] = [];
    let valid: boolean = false;

    if (userId === undefined) {
      errors.push(`required query param userId is undefined!`);
    } else if (Number.isNaN(parseInt(userId.toString()))) {
      errors.push(`userId is not a valid number!`);
    }
    if (activeIngredient?.name === undefined) {
      errors.push(`missing active ingredient required field name!`);
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
    activeIngredient: ActiveIngredient,
    queries: QueryString.ParsedQs
  ) {
    let userId = queries?.userId;

    let errors: string[] = [];
    let valid: boolean = false;

    if (activeIngredient?.id === undefined) {
      errors.push(`missing active ingredient required field id!`);
    } else if (Number.isNaN(parseInt(activeIngredient.id.toString()))) {
      errors.push(`id is not a valid number!`);
    }

    if (userId === undefined) {
      errors.push(`required query param userId is undefined!`);
    } else if (Number.isNaN(parseInt(userId.toString()))) {
      errors.push(`userId is not a valid number!`);
    }
    if (activeIngredient?.name === undefined) {
      errors.push(`missing active ingredient required field name!`);
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

export default ActiveIngredientValidator;
