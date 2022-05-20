import DosageFormType from "./dosage-form-type.dto";

class DosageFormTypeServiceReadRequest {
  correlationId?: string;
  dosageFormTypeId?: number;

  static fromJson(json: object) {
    return Object.assign(new DosageFormTypeServiceReadRequest(), json);
  }
}

class DosageFormTypeServiceWriteRequest {
  correlationId?: string;
  userId: number;
  dosageFormType: DosageFormType;

  static fromJson(json: object) {
    return Object.assign(new DosageFormTypeServiceWriteRequest(), json);
  }
}

export { DosageFormTypeServiceReadRequest, DosageFormTypeServiceWriteRequest };
