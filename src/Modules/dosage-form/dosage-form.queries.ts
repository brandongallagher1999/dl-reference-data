enum DosageFormQueries {
  findAll = "SELECT * FROM refdata_dosage_forms",
  findById = "SELECT * FROM refdata_dosage_forms WHERE id = $1",
  findByDosageFormTypeId = "SELECT * FROM refdata_dosage_forms WHERE dosage_form_type_id = $1",
}

export default DosageFormQueries;
