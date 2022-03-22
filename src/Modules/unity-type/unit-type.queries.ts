enum UnitTypeQueries {
  findAll = "SELECT * FROM refdata_unit_type",
  findById = "SELECT * FROM refdata_unit_type where id = $1",
}

export default UnitTypeQueries;
