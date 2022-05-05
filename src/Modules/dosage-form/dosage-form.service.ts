import RefDataException from "../../exceptions/RefDataException";
import { QueryResult } from "pg";
import { ServiceResponse } from "dlpos-core";
import dosageFormRepository from "./dosage-form.repository";
import QueryString from "qs";
import DosageForm from "./dosage-form.dto";
import DosageFormValidator from "./dosage-form.validator";

class DosageFormService {
  async findAll() {
    let queryResult: QueryResult = await dosageFormRepository.findAll();
    let serviceResponse: ServiceResponse = {
      status: 200,
      itemCount: queryResult.rowCount,
      data: queryResult.rows.map((activeIngredient) => {
        return DosageForm.fromJson(activeIngredient);
      }),
    };
    return serviceResponse;
  }

  async findById(id: string) {
    let numId: number = Number(id);
    if (Number.isNaN(numId)) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult = await dosageFormRepository.findById(numId);
    if (queryResult.rowCount < 1) {
      throw new RefDataException(404, `No dosage form found for id: ${id}`);
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        data: [DosageForm.fromJson(queryResult.rows[0])],
      };
      serviceResponse.data = queryResult.rows[0];
      return serviceResponse;
    }
  }

  async findByDosageFormsByTypeId(dosageFormTypeId: string) {
    let numDosageFormTypeId: number = Number(dosageFormTypeId);
    if (Number.isNaN(numDosageFormTypeId)) {
      throw new RefDataException(400, "id provided is not a valid number");
    }
    let queryResult: QueryResult =
      await dosageFormRepository.findByDosageFormTypeId(numDosageFormTypeId);
    if (queryResult.rowCount < 1) {
      throw new RefDataException(
        404,
        `No dosage forms found for dosage form type id: ${dosageFormTypeId}`
      );
    } else {
      let serviceResponse: ServiceResponse = {
        status: 200,
        itemCount: queryResult.rowCount,
        data: queryResult.rows.map((activeIngredient) => {
          return DosageForm.fromJson(activeIngredient);
        }),
      };
      return serviceResponse;
    }
  }

  async create(requestBody: any, queryParams: QueryString.ParsedQs) {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    let newDosageForm: DosageForm = DosageForm.fromJson(requestBody);
    let validRequest = DosageFormValidator.validateCreateRequest(
      newDosageForm,
      queryParams
    );
    if (validRequest.errors.length > 0) {
      let exception: RefDataException = new RefDataException(
        400,
        "Invalid request."
      );
      exception.addErrors(validRequest.errors);
      throw exception;
    }
    await dosageFormRepository.create(
      newDosageForm,
      parseInt(queryParams.userId.toString())
    );

    serviceResponse.message = "Dosage form successfully created!";

    return serviceResponse;
  }

  async update(requestBody: any, queryParams: QueryString.ParsedQs) {
    let serviceResponse: ServiceResponse = {
      status: 200,
    };

    let updatedDosageForm: DosageForm = DosageForm.fromJson(requestBody);
    let validatorResponse = DosageFormValidator.validateUpdateRequest(
      updatedDosageForm,
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
    await dosageFormRepository.update(
      updatedDosageForm,
      parseInt(queryParams.userId.toString())
    );

    serviceResponse.message = "Dosage Form successfully updated!";

    return serviceResponse;
  }
}

export default new DosageFormService();
