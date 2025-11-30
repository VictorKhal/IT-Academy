const axios = require("axios");
const validator = require("jsonschema");
const authorsSchema = require("../schemas/authors_getByBookId.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books";

let response;
const validBookId = 2;

describe("GET Authors/authors/books/{idBook} — API Tests", () => {

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/${validBookId}`, {
      headers: { "accept": "text/plain; v=1.0" }
    });
  });

  test("GET Authors/authors/books/{idBook} should return 200", async () => {
    expect(response.status).toEqual(200);
  });

  test("Response should be an array of authors", async () => {
    expect(Array.isArray(response.data)).toEqual(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("Each author should have required fields", async () => {
    const author = response.data[0];

    expect(author).toHaveProperty("id");
    expect(author).toHaveProperty("idBook", validBookId);
    expect(author).toHaveProperty("firstName");
    expect(author).toHaveProperty("lastName");

    expect(typeof author.id).toEqual("number");
    expect(typeof author.idBook).toEqual("number");
    expect(typeof author.firstName).toEqual("string");
    expect(typeof author.lastName).toEqual("string");
  });

  test("Response should match JSON Schema", async () => {
      const validation = validator.validate(response.data, authorsSchema);
      expect(validation.valid).toEqual(true);
  });


  test("GET non-existing book id should return empty array or 404", async () => {
    try {
      const res = await axios.get(`${BASE_URL}/999999`);
      expect(Array.isArray(res.data)).toEqual(true);
      expect(res.data.length).toEqual(0);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("GET with invalid book id (string) should return 400", async () => {
    try {
      await axios.get(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

});
