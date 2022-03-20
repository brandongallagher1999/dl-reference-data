enum UnitQueries {
  findAll = "SELECT * from refdata_units",
  findById = "SELECT * FROM refdata_units WHERE id = $1",
  findByType = "SELECT * FROM refdata_units WHERE unit_type_id = $1",
}

export default UnitQueries;
