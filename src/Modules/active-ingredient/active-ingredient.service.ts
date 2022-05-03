import { ServiceResponse } from "dlpos-core";
import { QueryResult } from "pg";
import ActiveIngredient from "./active-ingredient.dto";
import activeIngredientRepository from "./active-ingredient.repository";
import RefDataException from "../../exceptions/RefDataException";
import QueryString from "qs";
import ActiveIngredientValidator from "./active-ingredient.validator";

class ActiveIngredientService {
  async findAll() {
    let queryResult: QueryResult = await activeIngredientRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.rowCount,
      data: queryResult.rows.map((activeIngredient) => {
        return ActiveIngredient.fromJson(activeIngredient);
      }),
    };
    return serviceResponse;
  }

  async findById(id: string) {
    let numId: number = Number(id);
    if (Number.isNaN(numId)) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult = await activeIngredientRepository.findById(
      numId
    );
    if (queryResult.rowCount < 1) {
      throw new RefDataException(
        404,
        `No active ingredient found for id: ${id}`
      );
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: [ActiveIngredient.fromJson(queryResult.rows[0])],
      };
      return serviceResponse;
    }
  }

  async create(requestBody: any, queryParams: QueryString.ParsedQs) {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    let newActiveIngredient: ActiveIngredient =
      ActiveIngredient.fromJson(requestBody);
    let validatorResponse = ActiveIngredientValidator.validateRequest(
      newActiveIngredient,
      queryParams
    );
    if (validatorResponse.errors.length > 0) {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.addErrors(validatorResponse.errors);
      throw exception;
    }
    await activeIngredientRepository.create(
      newActiveIngredient,
      parseInt(queryParams.userId.toString())
    );

    serviceResponse.message = "Active ingredient successfully created!";

    return serviceResponse;
  }

  async update(requestBody: any, queryParams: QueryString.ParsedQs) {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    let updatedActiveIngredient: ActiveIngredient =
      ActiveIngredient.fromJson(requestBody);
    let validatorResponse = ActiveIngredientValidator.validateUpdateRequest(
      updatedActiveIngredient,
      queryParams
    );
    if (validatorResponse.errors.length > 0) {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.addErrors(validatorResponse.errors);
      throw exception;
    }
    await activeIngredientRepository.update(
      updatedActiveIngredient,
      parseInt(queryParams.userId.toString())
    );

    serviceResponse.message = "Active ingredient successfully updated!";

    return serviceResponse;
  }
}

export default new ActiveIngredientService();
