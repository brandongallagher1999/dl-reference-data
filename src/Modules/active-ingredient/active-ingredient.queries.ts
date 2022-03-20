enum ActiveIngredientQueries {
  findAll = "SELECT * from refdata_active_ingredients",
  findById = "SELECT * FROM refdata_active_ingredients WHERE id = $1",
}

export default ActiveIngredientQueries;
