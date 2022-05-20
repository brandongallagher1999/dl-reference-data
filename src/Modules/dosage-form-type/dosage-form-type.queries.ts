enum DosageFormQueries {
  TABLE_NAME = "refdata_dosage_form_type",
  FIND_ALL = "SELECT * FROM refdata_dosage_form_type",
  FIND_BY_ID = "SELECT * FROM refdata_dosage_form_type WHERE id = $1",
  CREATE = "INSERT INTO public.refdata_dosage_form_type (name) VALUES($1) RETURNING id",
  UPDATE = 'UPDATE public.refdata_dosage_form_type SET "name"=$1 WHERE id=$2 RETURNING id',
}

export default DosageFormQueries;
