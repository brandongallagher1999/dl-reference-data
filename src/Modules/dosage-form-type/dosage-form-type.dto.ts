class DosageFormType {
  id?: number;
  name: string;

  static fromJson(json: object) {
    return Object.assign(new DosageFormType(), json);
  }
}

export default DosageFormType;
