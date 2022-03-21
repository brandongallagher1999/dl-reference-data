import request from "supertest";
import ReferenceDataService from "../app";

describe("Given manufacturers table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/manufacturers should respond with all manufacturers on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/manufacturers"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/manufacturers/:id should respond with manufacturer data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/manufacturers/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe("1");
  });
});

describe("Given manufacturers table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/manufacturers/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/manufacturers/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/manufacturers/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/manufacturers/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
