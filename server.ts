import ReferenceDataService from "./src/app";

ReferenceDataService.listen(5678, () => {
  console.log("DL Reference data service listening on port 5678!");
});