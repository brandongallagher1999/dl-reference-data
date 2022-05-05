class DosageForm {
  id?: number;
  name: string;
  dosage_form_type_id: number;

  static fromJson(json: object) {
    return Object.assign(new DosageForm(), json);
  }
}

export default DosageForm;
