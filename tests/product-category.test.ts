import request from "supertest";
import ReferenceDataService from "../app";

describe("Given productCategories table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/productCategories should respond with all productCategories on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/productCategories"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/productCategories/:id should respond with productCategory data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/productCategories/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe(1);
  });
});

describe("Given productCategories table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/productCategories/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/productCategories/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/productCategories/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/productCategories/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
