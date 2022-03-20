enum PaymentMethodQueries {
  findAll = "SELECT * from refdata_payment_methods",
  findById = "SELECT * FROM refdata_payment_methods WHERE id = $1",
}

export default PaymentMethodQueries;
