enum DosageFormQueries {
  findAll = "SELECT * FROM refdata_dosage_form_type",
  findById = "SELECT * FROM refdata_dosage_form_type WHERE id = $1",
}

export default DosageFormQueries;
