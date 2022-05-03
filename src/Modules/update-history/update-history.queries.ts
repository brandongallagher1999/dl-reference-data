enum ReferenceDataUpdateHistoryQueries {
  getUpdateHistory = "SELECT * FROM public.refData_update_history WHERE table_name=$1 AND refdata_id=$2",
  createUpdateHistoryEntry = 'INSERT INTO public.refdata_update_history(instruction, table_name, "refData_id", user_id, update_timestamp, before_state, after_state)VALUES($1, $2, $3, $4, $5, $6, $7)',
}

export default ReferenceDataUpdateHistoryQueries;
