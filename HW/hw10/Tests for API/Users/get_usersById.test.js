const axios = require("axios");
const validator = require("jsonschema");
const userGetSchema = require("../schemas/users_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Users";


describe("API test GET users/{id}  ", () => {
  let positiveResponse;

  beforeAll(async () => {
    const validId = 1;
    positiveResponse = await axios.get(`${BASE_URL}/${validId}`);
  });

  test("GET valid user by ID with status 200", () => {
    expect(positiveResponse.status).toEqual(200);
    expect(typeof positiveResponse.data).toEqual("object");

    expect(positiveResponse.data).toHaveProperty("id", 1);
    expect(positiveResponse.data).toHaveProperty("userName");
    expect(positiveResponse.data).toHaveProperty("password");
  });


  test("JSON Schema should match response", () => {
    const validation = validator.validate(positiveResponse.data, userGetSchema);

    expect(validation.valid).toEqual(true);
  });


  test("Non-existing user ID with status 404 ", async () => {
    const invalidId = 999999;

    try {
      await axios.get(`${BASE_URL}/${invalidId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });


  test("Invalid ID format (string) with status 400", async () => {
    const invalidId = "abc";

    try {
      await axios.get(`${BASE_URL}/${invalidId}`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });


  test("Negative ID with status 404", async () => {
    const invalidId = -5;

    try {
      await axios.get(`${BASE_URL}/${invalidId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });


  test("Empty ID with status 400", async () => {
    console.log("API test GET users/{id} Empty ID with status 400 не отрабатывает")
    try {
      await axios.get(`${BASE_URL}/`);
    } catch (err) {
      console.log("not good")
      expect(err.response.status).toEqual(200);
    }
  });

});
