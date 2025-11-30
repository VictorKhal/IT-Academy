const axios = require("axios");
const validator = require("jsonschema");
const activitiesSchema = require("../schemas/activities_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

let getResponse;
const validId = 1;

describe("GET Activities/{id} — API Tests", () => {

  beforeAll(async () => {
    getResponse = await axios.get(`${BASE_URL}/${validId}`);
  });

  test("GET Activities/{id} should return 200", () => {
    expect(getResponse.status).toEqual(200);
  });

  test("Response should be an object", () => {
    expect(typeof getResponse.data).toEqual("object");
  });

  test("Activity object should contain required fields", () => {
    const activity = getResponse.data;

    expect(activity).toHaveProperty("id", validId);
    expect(activity).toHaveProperty("title");
    expect(activity).toHaveProperty("dueDate");
    expect(activity).toHaveProperty("completed");

    expect(typeof activity.title).toEqual("string");
    expect(typeof activity.dueDate).toEqual("string");
    expect(typeof activity.completed).toEqual("boolean");
  });

  test("Response should match JSON Schema", () => {
    const validation = validator.validate(getResponse.data, activitiesSchema);
    expect(validation.valid).toEqual(true);
  });


  test("GET non-existing id should return 404", async () => {
    try {
      await axios.get(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("GET with id = string should return 400", async () => {
    try {
      await axios.get(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("GET with id = negative number should return 404", async () => {
    try {
      await axios.get(`${BASE_URL}/-5`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("GET Activities/ (empty ID) should return mistake", async () => {
    try {
      await axios.get(`${BASE_URL}/`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

});
