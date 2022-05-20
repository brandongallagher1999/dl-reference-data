import { createConnectionPool } from "dlpos-core";
import request from "supertest";
import ReferenceDataService from "../src/app";

beforeAll(() => {
  createConnectionPool("dev_user", "localhost", "dl_staging", "password", 5432);
});

describe("Given dosageFormTypes table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/dosageFormTypes should respond with all dosageFormTypes on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageFormTypes"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/dosageFormTypes/:id should respond with dosageFormType data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageFormTypes/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data[0].id).toBe(1);
  });
});

describe("Given dosageFormTypes table is populated and non existent ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/dosageFormTypes/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageFormTypes/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/dosageFormTypes/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageFormTypes/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
