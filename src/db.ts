import { Pool } from "pg";
import ReferenceDataException from "./exceptions/RefDataException";

export const db = new Pool({
  user: "dev_user",
  host: "localhost",
  database: "dl_staging",
  password: "password",
  port: 5432,
});

export async function isDBReachable(): Promise<boolean> {
  try {
    const client = await db.connect();
    client.release();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function executeQuery(queryString: string) {
  try {
    const client = await db.connect();
    try {
      await client.query("BEGIN");
      const query = await client.query(queryString);
      await client.query("COMMIT");
      return query;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    throw new ReferenceDataException(500, error.message);
  }
}

export async function executeQueryWithValues(
  queryString: string,
  queryValues: any[]
) {
  try {
    const client = await db.connect();
    try {
      await client.query("BEGIN");
      const query = await client.query(queryString, queryValues);
      await client.query("COMMIT");
      return query;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.log(queryValues);
    throw new ReferenceDataException(500, error.message);
  }
}
