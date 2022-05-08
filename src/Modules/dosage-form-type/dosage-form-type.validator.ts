import { Instruction } from "../../types";
import DosageFormType from "./dosage-form-type.dto";
import {
  DosageFormTypeServiceReadRequest,
  DosageFormTypeServiceWriteRequest,
} from "./dosage-form-type.requests";
import CommonValidator from "../../utils/common-validator";

const maxReadRequestObjectLength = 2;
const maxWriteRequestObjectLength = 3;
const maxRequestPayloadLength = 2;

type DosageFormTypeServiceValidatorResult = {
  isValid: boolean;
  validPayload?:
    | DosageFormTypeServiceReadRequest
    | DosageFormTypeServiceWriteRequest;
  errors: string[];
};

class DosageFormTypeServiceValidator {
  static validate(requestBody: any, instruction: Instruction) {
    let result: DosageFormTypeServiceValidatorResult = {
      isValid: false,
      errors: [],
    };
    switch (instruction) {
      case Instruction.READ:
        break;
      case Instruction.READ_FILTERED:
        let maybeReadFilteredRequest =
          DosageFormTypeServiceReadRequest.fromJson(requestBody);
        console.log(maybeReadFilteredRequest);
        // if (?.dosageFormTypeId === undefined) {
        //   result.errors.push("required field dosageFormTypeId is missing from request");
        // }
        break;
      case Instruction.CREATE:
        let maybeCreateRequest =
          DosageFormTypeServiceWriteRequest.fromJson(requestBody);
        maybeCreateRequest.dosageFormType = DosageFormType.fromJson(
          maybeCreateRequest.dosageFormType
        );
        if (
          Object.keys(maybeCreateRequest).length > maxWriteRequestObjectLength
        ) {
          result.errors.push("Write request fields exceeds allowed fields");
          return result;
        }
        if (
          Object.keys(maybeCreateRequest.dosageFormType).length >
          maxRequestPayloadLength
        ) {
          result.errors.push(
            "Write request dosageFormType content exceeds allowed fields"
          );
          return result;
        }
        if (maybeCreateRequest?.userId === undefined) {
          result.errors.push("Missing required field userId");
        } else if (
          !CommonValidator.isNumber(maybeCreateRequest.userId).isValid
        ) {
          result.errors.push(
            `userId "${maybeCreateRequest.userId}" is not a valid number`
          );
        }

        if (maybeCreateRequest?.dosageFormType === undefined) {
          result.errors.push("Missing required field dosageFormType");
        } else if (maybeCreateRequest.dosageFormType?.name === undefined) {
          result.errors.push("Missing required field name");
        }
        result.validPayload = maybeCreateRequest;
        console.log(maybeCreateRequest);
        console.log(result.errors);
        break;
    }

    if (result.errors.length === 0) {
      result.isValid = true;
    }
  }
}

export default DosageFormTypeServiceValidator;
