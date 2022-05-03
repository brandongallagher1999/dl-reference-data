import ReferenceDataService from "./src/app";
import { createConnectionPool } from "dlpos-core";
// import { initializeDb } from "dlpos-core";

// initializeDb(`${__dirname}/resources/sql_scripts/refdata_tables.sql`).then(
//   (dbInitialized) => {
//     if (dbInitialized) {
//       ReferenceDataService.listen(5678, () => {
//         console.log("DL Reference data service listening on port 5678!");
//       });
//     } else {
//       console.error("Error Initializing DB - Unable to Initialize Service");
//     }
//   }
// );
createConnectionPool("dev_user", "localhost", "dl_staging", "password", 5432);
ReferenceDataService.listen(5678, () => {
  console.log("DL Reference data service listening on port 5678!");
});
