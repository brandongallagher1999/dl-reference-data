import request from "supertest";
import ReferenceDataService from "../app";

describe("Given unitTypes table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/unitTypes should respond with all unitTypes on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/unitTypes"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/unitTypes/:id should respond with unitType data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/unitTypes/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe(1);
  });
});

describe("Given unitTypes table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/unitTypes/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/unitTypes/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/unitTypes/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/unitTypes/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
