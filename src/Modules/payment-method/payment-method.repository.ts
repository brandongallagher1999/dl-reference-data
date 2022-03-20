import { executeQuery, executeQueryWithValues } from "../../db";
import PaymentMethodQueries from "./payment-method.queries";

class PaymentMethodRepository {
  async findAll() {
    return executeQuery(PaymentMethodQueries.findAll);
  }

  async findById(id: bigint) {
    return executeQueryWithValues(PaymentMethodQueries.findById, [id]);
  }
}

export default new PaymentMethodRepository();
