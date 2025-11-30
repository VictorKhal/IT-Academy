const axios = require("axios");
const validator = require("jsonschema");
const activityPostSchema = require("../schemas/activities_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

let postResponse;

describe("POST Activities — API Tests", () => {

  beforeAll(async () => {
    const body = {
      id: 0,
      title: "string",
      dueDate: "2025-11-23T19:41:56.056Z",
      completed: true
    };

    postResponse = await axios.post(BASE_URL, body);
  });


  test("POST should return status 200", () => {
    expect(postResponse.status).toEqual(200);
  });

  test("POST should return created activity", () => {
    const data = postResponse.data;

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("title", "string");
    expect(data).toHaveProperty("dueDate", "2025-11-23T19:41:56.056Z");
    expect(data).toHaveProperty("completed", true);
  });

  test("POST response should match JSON Schema", () => {
    const validation = validator.validate(postResponse.data, activityPostSchema);
    expect(validation.valid).toEqual(true);
  });


  test("POST with missing fields should return 400", async () => {
    try {
      await axios.post(BASE_URL, {
        id: 1,
        title: "No due date"
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("POST with invalid types should return 400", async () => {
    try {
      await axios.post(BASE_URL, {
        id: "abc",
        title: 123,
        dueDate: false,
        completed: "yes"
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("POST with empty body should return error", async () => {
    try {
      await axios.post(BASE_URL, {});
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("POST with negative id should return error", async () => {
    try {
      await axios.post(BASE_URL, {
        id: -5,
        title: "string",
        dueDate: "2025-11-23T19:41:56.056Z",
        completed: true
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("POST with extremely long title should return error", async () => {
    try {
      await axios.post(BASE_URL, {
        id: 0,
        title: "x".repeat(5000),
        dueDate: "2025-11-23T19:41:56.056Z",
        completed: true
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

});
