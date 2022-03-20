enum ProductCategoryQueries {
  findAll = "SELECT * from refdata_product_categories",
  findById = "SELECT * FROM refdata_product_categories WHERE id = $1",
}

export default ProductCategoryQueries;
