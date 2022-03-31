import { Pool } from "pg";
import { readdirSync, readFileSync } from "fs";

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
    throw error;
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
    throw error;
  }
}

export async function executeSQLFiles(sqlFilePath: string) {
  try {
    const sqlStatement = readFileSync(`${sqlFilePath}`, "utf8");
    executeQuery(sqlStatement);
  } catch (err) {
    console.error(err);
  }
}
