const axios = require("axios");
const validator = require("jsonschema");
const authorsSchema = require("../schemas/authors_get.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Authors";

let response;

describe("GET Authors — API Tests", () => {

  beforeAll(async () => {
    response = await axios.get(BASE_URL, {
      headers: { "accept": "text/plain; v=1.0" }
    });
  });

  test("GET Authors should return 200", () => {
    expect(response.status).toEqual(200);
  });

  test("GET Authors should return an array", () => {
    expect(Array.isArray(response.data)).toEqual(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("Each author should have required fields", () => {
    const author = response.data[0];

    expect(author).toHaveProperty("id");
    expect(author).toHaveProperty("idBook");
    expect(author).toHaveProperty("firstName");
    expect(author).toHaveProperty("lastName");

    expect(typeof author.id).toEqual("number");
    expect(typeof author.idBook).toEqual("number");
    expect(typeof author.firstName).toEqual("string");
    expect(typeof author.lastName).toEqual("string");
  });

  test("Response should match JSON Schema", () => {
      const validation = validator.validate(response.data, authorsSchema);
      expect(validation.valid).toEqual(true);
  });

  test("GET invalid endpoint should return 404", async () => {
    try {
      await axios.get(`${BASE_URL}123`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

});
