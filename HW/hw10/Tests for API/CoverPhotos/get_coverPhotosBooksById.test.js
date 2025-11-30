const axios = require("axios");
const validator = require("jsonschema");
const schema = require("../schemas/coverPhotos_get.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/books/covers";

describe("GET CoverPhotos/books/covers/{bookId} — API Tests", () => {
  let response;
  const bookId = 2;

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/${bookId}`, {
      headers: { accept: "text/plain; v=1.0" }
    });
  });


  test("GET returns 200", async () => {
    expect(response.status).toEqual(200);
  });

  test("Response is an array",async () => {
    expect(Array.isArray(response.data)).toEqual(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("Each item contains required properties", async () => {
    const item = response.data[0];

    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("idBook");
    expect(item).toHaveProperty("url");

    expect(typeof item.id).toEqual("number");
    expect(typeof item.idBook).toEqual("number");
    expect(typeof item.url).toEqual("string");
  });

  test("Response matches JSON Schema", async () => {
    const validation = validator.validate(response.data, schema);
    expect(validation.valid).toEqual(true);
  });


  test("GET non-existing book id returns empty array OR 404", async () => {
    const invalidId = 999999;

    try {
      const res = await axios.get(`${BASE_URL}/${invalidId}`);
      expect(Array.isArray(res.data)).toEqual(true);
      expect(res.data.length).toEqual(0);
    } catch (err) {
      expect([404]).toContain(err.response.status);
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
