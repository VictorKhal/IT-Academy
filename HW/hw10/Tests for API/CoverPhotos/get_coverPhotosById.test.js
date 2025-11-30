const axios = require("axios");
const validator = require("jsonschema");
const schema = require("../schemas/coverPhotos_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos";

describe("GET CoverPhotos/{id} — API Tests", () => {
  let response;
  const testId = 1;

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/${testId}`);
  });

  test("GET by id returns 200", async () => {
    expect(response.status).toEqual(200);
  });

  test("Response contains correct object structure and correct types", async () => {
    expect(response.data).toHaveProperty("id", testId);
    expect(response.data).toHaveProperty("idBook");
    expect(response.data).toHaveProperty("url");

     expect(typeof response.data.id).toEqual("number");
    expect(typeof response.data.idBook).toEqual("number");
    expect(typeof response.data.url).toEqual("string");
  });


  test("Matches JSON Schema",async () => {
    const result = validator.validate(response.data, schema);
    expect(result.valid).toEqual(true);
  });

  test("GET non-existing id returns 404", async () => {
    try {
      await axios.get(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("GET invalid id format returns 400", async () => {
    try {
      await axios.get(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });
});
