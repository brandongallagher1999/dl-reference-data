import request from "supertest";
import ReferenceDataService from "../app";

describe("Given Suppliers table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/suppliers should respond with all suppliers on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/suppliers"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/suppliers/:id should respond with supplier data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/suppliers/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe("1");
  });
});

describe("Given Suppliers table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/suppliers/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/suppliers/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/suppliers/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/suppliers/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
