import { isBigIntLiteral } from "typescript";

type CommonValidatorResult = {
  isValid: boolean;
  validValue?: any;
  error?: string;
};

class CommonValidator {
  static isNumber(maybeNumber: any) {
    let validationResult: CommonValidatorResult = {
      isValid: false,
    };
    if (typeof maybeNumber != "number") {
      validationResult.error = "is not a valid number";
    } else {
      validationResult.isValid = true;
      validationResult.validValue = maybeNumber;
    }

    return validationResult;
  }

  static validateNumber(maybeNumber: string) {
    let validationResult: CommonValidatorResult = {
      isValid: false,
    };
    if (Number.isNaN(parseInt(maybeNumber))) {
      validationResult.error = "is not a valid number";
    } else {
      validationResult.isValid = true;
      validationResult.validValue = maybeNumber;
    }

    return validationResult;
  }

  static isBigInt(maybeBigInt: string) {
    let validationResult: CommonValidatorResult = {
      isValid: false,
    };
    try {
      let bigIntValue = BigInt(maybeBigInt);
      validationResult.isValid = true;
      validationResult.validValue = bigIntValue;
    } catch (error) {
      validationResult.error = "is not a valid long";
    }

    return validationResult;
  }
}

export default CommonValidator;
