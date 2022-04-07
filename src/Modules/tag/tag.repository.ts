import { executeQuery, executeQueryWithValues } from "dlpos-core";
import TagQueries from "./tag.queries";

class TagRepository {
  async findAll() {
    return executeQuery(TagQueries.findAll);
  }

  async findById(id: number) {
    return executeQueryWithValues(TagQueries.findById, [id]);
  }
}

export default new TagRepository();
