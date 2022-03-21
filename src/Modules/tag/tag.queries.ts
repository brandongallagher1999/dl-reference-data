enum TagQueries {
  findAll = "SELECT * FROM refdata_tags",
  findById = "SELECT * FROM refdata_tags WHERE id = $1",
}

export default TagQueries;
