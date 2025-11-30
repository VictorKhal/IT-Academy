const axios = require("axios");
const validator = require("jsonschema");
const activitiesSchema = require("../schemas/activities_get.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

let response;

describe("GET Activities — API Tests", () => {

  beforeAll(async () => {
    response = await axios.get(BASE_URL);
  });

  test("GET Activities should return 200", () => {
    expect(response.status).toEqual(200);
  });


  test("GET Activities should return an array", () => {
    expect(Array.isArray(response.data)).toEqual(true);
  });


  test("Each activity should have required fields", () => {
    const activity = response.data[0];

    expect(activity).toHaveProperty("id");
    expect(activity).toHaveProperty("title");
    expect(activity).toHaveProperty("dueDate");
    expect(activity).toHaveProperty("completed");

    expect(typeof activity.id).toEqual("number");
    expect(typeof activity.title).toEqual("string");
    expect(typeof activity.dueDate).toEqual("string");
    expect(typeof activity.completed).toEqual("boolean");
  });


  test("GET Activities should match JSON Schema", () => {
    const validation = validator.validate(response.data, activitiesSchema);
    expect(validation.valid).toEqual(true);
  });


  test("GET Activities with invalid endpoint should return 404", async () => {
    try {
      await axios.get(`${BASE_URL}123`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

});
