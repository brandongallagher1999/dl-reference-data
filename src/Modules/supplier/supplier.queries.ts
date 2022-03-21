enum SupplierQueries {
  findAll = "SELECT * from refdata_suppliers",
  findById = "SELECT * FROM refdata_suppliers WHERE id = $1",
}

export default SupplierQueries;
