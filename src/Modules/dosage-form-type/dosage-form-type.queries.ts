enum DosageFormQueries {
  TABLE_NAME = "refdata_dosage_form_type",
  FIND_ALL = "SELECT * FROM refdata_dosage_form_type",
  FIND_BY_ID = "SELECT * FROM refdata_dosage_form_type WHERE id = $1",
  CREATE = "",
  UPDATE = "",
}

export default DosageFormQueries;
