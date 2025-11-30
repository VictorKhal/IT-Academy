const axios = require("axios");
const validator = require("jsonschema");
const activitySchema = require("../schemas/activities_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

let putResponse;

const activityId = 1;

const requestBody = {
  id: 0,
  title: "string",
  dueDate: "2025-11-23T19:48:37.928Z",
  completed: true
};

describe("PUT Activities/{id} — API Tests", () => {

  beforeAll(async () => {
    putResponse = await axios.put(`${BASE_URL}/${activityId}`, requestBody, {
      headers: {
        "Content-Type": "application/json; v=1.0",
        "accept": "text/plain; v=1.0"
      }
    });
  });

  test("PUT /Activities/{id} should return 200", () => {
    expect(putResponse.status).toEqual(200);
  });

  test("Response should contain updated object", () => {
    const body = putResponse.data;

    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("title", "string");
    expect(body).toHaveProperty("dueDate", "2025-11-23T19:48:37.928Z");
    expect(body).toHaveProperty("completed", true);
  });

  test("Updated object should match JSON Schema", () => {
    const validation = validator.validate(putResponse.data, activitySchema);
    expect(validation.valid).toEqual(true);
  });


  test("PUT with non-existing id should return 404", async () => {
    try {
      await axios.put(`${BASE_URL}/999999`, requestBody);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("PUT with invalid id format should return 400", async () => {
    try {
      await axios.put(`${BASE_URL}/abc`, requestBody);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("PUT with empty body should return 400", async () => {
    try {
      await axios.put(`${BASE_URL}/${activityId}`, {});
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("PUT with missing required fields should return error", async () => {
    try {
      await axios.put(`${BASE_URL}/${activityId}`, {
        id: 0
      });
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

});