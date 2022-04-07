import { executeQuery, executeQueryWithValues } from "dlpos-core";
import PaymentMethodQueries from "./payment-method.queries";

class PaymentMethodRepository {
  async findAll() {
    return executeQuery(PaymentMethodQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(PaymentMethodQueries.findById, [id]);
  }
}

export default new PaymentMethodRepository();
