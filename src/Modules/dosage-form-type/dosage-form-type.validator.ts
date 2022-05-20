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
  validReadRequest?: DosageFormTypeServiceReadRequest;
  validWriteRequest?: DosageFormTypeServiceWriteRequest;
  errors: string[];
};

class DosageFormTypeServiceValidator {
  static validate(requestBody: any, instruction: Instruction) {
    let result: DosageFormTypeServiceValidatorResult = {
      isValid: false,
      errors: [],
    };
    switch (instruction) {
      case Instruction.READ_FILTERED:
        let maybeReadFilteredRequest =
          DosageFormTypeServiceReadRequest.fromJson(requestBody);
        console.log(maybeReadFilteredRequest);
        if (maybeReadFilteredRequest?.dosageFormTypeId === undefined) {
          result.errors.push(
            "required field dosageFormTypeId is missing from request"
          );
        } else if (
          !CommonValidator.isNumber(maybeReadFilteredRequest.dosageFormTypeId)
        ) {
          result.errors.push(
            `dosageFormTypeId ${maybeReadFilteredRequest.dosageFormTypeId} is not a valid number`
          );
        }
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
        result.validWriteRequest = maybeCreateRequest;
        break;
      case Instruction.UPDATE:
        let maybeUpdateRequest =
          DosageFormTypeServiceWriteRequest.fromJson(requestBody);
        maybeUpdateRequest.dosageFormType = DosageFormType.fromJson(
          maybeUpdateRequest.dosageFormType
        );
        if (
          Object.keys(maybeUpdateRequest).length > maxWriteRequestObjectLength
        ) {
          result.errors.push("Update request fields exceeds allowed fields");
          return result;
        }
        if (
          Object.keys(maybeUpdateRequest.dosageFormType).length >
          maxRequestPayloadLength
        ) {
          result.errors.push(
            "Update request dosageFormType content exceeds allowed fields"
          );
          return result;
        }
        if (maybeUpdateRequest?.userId === undefined) {
          result.errors.push("Missing required field userId");
        } else if (
          !CommonValidator.isNumber(maybeUpdateRequest.userId).isValid
        ) {
          result.errors.push(
            `userId "${maybeUpdateRequest.userId}" is not a valid number`
          );
        }

        if (maybeUpdateRequest?.dosageFormType === undefined) {
          result.errors.push("Missing required field dosageFormType");
        } else {
          if (maybeUpdateRequest.dosageFormType?.name === undefined) {
            result.errors.push("Missing dosageFormType required field name");
          }
          if (maybeUpdateRequest.dosageFormType?.id === undefined) {
            result.errors.push("Missing dosageFormType required field id");
          } else if (
            !CommonValidator.isNumber(maybeUpdateRequest.dosageFormType.id)
              .isValid
          ) {
            result.errors.push(
              `dosageFormType id "${maybeUpdateRequest.dosageFormType.id}" is not a valid number`
            );
          }
        }
        result.validWriteRequest = maybeUpdateRequest;
        break;
    }

    if (result.errors.length === 0) {
      result.isValid = true;
    }

    return result;
  }
}

export default DosageFormTypeServiceValidator;
