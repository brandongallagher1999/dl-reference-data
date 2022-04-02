import ReferenceDataService from "./src/app";
import { initializeDb } from "./src/db";

initializeDb(`${__dirname}/resources/sql_scripts/refdata_tables.sql`).then(
  (dbInitialized) => {
    if (dbInitialized) {
      ReferenceDataService.listen(5678, () => {
        console.log("DL Reference data service listening on port 5678!");
      });
    } else {
      console.error("Error Initializing DB - Unable to Initialize Service");
    }
  }
);
