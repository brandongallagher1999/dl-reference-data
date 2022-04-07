import request from "supertest";
import ReferenceDataService from "../src/app";

describe("Given Tags table is populated and valid ids: ", () => {
  test("/xibalba/v1/refdata/tags should respond with all tags on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/tags"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test("/xibalba/v1/refdata/tags/:id should respond with tag data for id on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/tags/1"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe(1);
  });
});

describe("Given Tags table is populated and non existend ids or invalid ids: ", () => {
  test("/xibalba/v1/refdata/tags/[non existent id] should respond 404 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/tags/78"
    );
    expect(response.statusCode).toBe(404);
  });
  test("/xibalba/v1/refdata/tags/[non valid id] should respond with 400 on GET method", async () => {
    const response = await request(ReferenceDataService).get(
      "/xibalba/v1/refdata/tags/&*"
    );
    expect(response.statusCode).toBe(400);
  });
});
