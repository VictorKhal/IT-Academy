const axios = require("axios");
const validator = require("jsonschema");
const coverPhotosSchema = require("../schemas/coverPhotos_get.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos";


describe("GET CoverPhotos — API Tests", () => {
  let response;

  beforeAll(async () => {
    response = await axios.get(BASE_URL, {
      headers: { accept: "text/plain; v=1.0" }
    });
  });


  test("GET CoverPhotos returns 200", async () => {
    expect(response.status).toEqual(200);
  });

  test("GET CoverPhotos returns an array", async () => {
    expect(Array.isArray(response.data)).toEqual(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("Each item has required fields and correct types", async () => {
    const item = response.data[0];

    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("idBook");
    expect(item).toHaveProperty("url");

    expect(typeof item.id).toEqual("number");
    expect(typeof item.idBook).toEqual("number");
    expect(typeof item.url).toEqual("string");
  });

  test("GET CoverPhotos response matches JSON Schema", async () => {
    const validation = validator.validate(response.data, coverPhotosSchema);
    expect(validation.valid).toEqual(true);
  });


  test("GET CoverPhotos123 returns 404 for invalid endpoint", async () => {
    try {
      await axios.get(`${BASE_URL}123`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });


  test("GET CoverPhotos/{id} returns 404 for non-existing id", async () => {
    try {
      await axios.get(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("GET CoverPhotos/{id} with invalid id format returns 400 or 404", async () => {
    try {
      await axios.get(`${BASE_URL}/abc`);
    } catch (err) {
      expect([400, 404]).toContain(err.response.status);
    }
  });

});
