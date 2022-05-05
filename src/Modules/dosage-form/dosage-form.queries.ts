enum DosageFormQueries {
  TABLE_NAME = "refdata_dosage_forms",
  FIND_ALL = "SELECT * FROM refdata_dosage_forms",
  FIND_BY_ID = "SELECT * FROM refdata_dosage_forms WHERE id = $1",
  FIND_BY_DOSAGE_FORM_TYPE_ID = "SELECT * FROM refdata_dosage_forms WHERE dosage_form_type_id = $1",
  CREATE = "INSERT INTO public.refdata_dosage_forms (name, dosage_form_type_id) VALUES($1, $2) RETURNING id",
  UPDATE = 'UPDATE public.refdata_dosage_forms SET "name"=$1, dosage_form_type_id=$2 WHERE id=$3 RETURNING id',
}

export default DosageFormQueries;
