enum ActiveIngredientQueries {
  TABLE_NAME = "refdata_active_ingredients",
  FIND_ALL = "SELECT * from refdata_active_ingredients",
  FIND_BY_ID = "SELECT * FROM refdata_active_ingredients WHERE id = $1",
  CREATE = 'INSERT INTO public.refdata_active_ingredients("name") VALUES($1) RETURNING id',
  UPDATE = 'UPDATE public.refdata_active_ingredients SET "name"=$1 WHERE id=$2 RETURNING id',
}

export default ActiveIngredientQueries;
