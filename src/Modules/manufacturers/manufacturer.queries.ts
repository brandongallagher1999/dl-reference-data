enum ManufacturerQueries {
  findAll = "SELECT * from refdata_manufacturers",
  findById = "SELECT * FROM refdata_manufacturers WHERE id = $1",
}

export default ManufacturerQueries;
