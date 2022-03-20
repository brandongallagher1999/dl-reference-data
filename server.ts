import ReferenceDataService from "./app";

ReferenceDataService.listen(5678, () => {
  console.log("DL Reference data service listening on port 5678!");
});
