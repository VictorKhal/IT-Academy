const axios = require("axios");
const validator = require("jsonschema");
const authorSchema = require("../schemas/authors_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Authors";
let response;
const validId = 1;

describe("GET Authors/{id} — API Tests", () => {

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/${validId}`);
  });

  test("GET Authors/{id} should return 200",async () => {
    expect(response.status).toEqual(200);
  });

  test("Response should be an object with required fields", async () => {
    const author = response.data;
    expect(author).toHaveProperty("id", validId);
    expect(author).toHaveProperty("idBook");
    expect(author).toHaveProperty("firstName");
    expect(author).toHaveProperty("lastName");

    expect(typeof author.idBook).toEqual("number");
    expect(typeof author.firstName).toEqual("string");
    expect(typeof author.lastName).toEqual("string");
  });

  test("Response should match JSON Schema", async () => {
    const validation = validator.validate(response.data, authorSchema);
    expect(validation.valid).toEqual(true);
  });


  test("GET non-existing id should return 404", async () => {
    try {
      await axios.get(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("GET invalid id (string) should return 400", async () => {
    try {
      await axios.get(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

});
