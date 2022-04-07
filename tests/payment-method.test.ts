import request from "supertest";
import ReferenceDataService from "../src/app";

describe("Given paymentMethods table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/paymentMethods should respond with all paymentMethods on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/paymentMethods"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/paymentMethods/:id should respond with paymentMethod data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/paymentMethods/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe(1);
  });
});

describe("Given paymentMethods table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/paymentMethods/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/paymentMethods/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/paymentMethods/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/paymentMethods/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
