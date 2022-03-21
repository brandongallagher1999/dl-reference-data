import request from "supertest";
import ReferenceDataService from "../app";

describe("Given dosageForms table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/dosageForms should respond with all dosageForms on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/dosageForms/:id should respond with dosageForm data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe("1");
  });

  test("/xibalba/v1/refdata/dosageForms/dosageFormType/:dosageFormTypeId should respond with all dosageForms for dosageFormTypeId on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms/dosageFormType/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });
});

describe("Given dosageForms table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/dosageForms/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/dosageForms/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms/&*"
    );
    expect(response.statusCode).toBe(400);
  });

  test("/xibalba/v1/refdata/dosageForms/dosageFormType/[non existent id] should respond with 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms/dosageFormType/99"
    );
    expect(response.statusCode).toBe(404);
  });

  test("/xibalba/v1/refdata/dosageForms/dosageFormType/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/dosageForms/dosageFormType/(*"
    );
    expect(response.statusCode).toBe(400);
  });
});
