const axios = require("axios");
const validator = require("jsonschema");
const booksSchema = require("../schemas/books_get.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Books";

let response;

describe("GET Books — API Tests", () => {

  beforeAll(async () => {
    response = await axios.get(BASE_URL, {
      headers: { "accept": "text/plain; v=1.0" }
    });
  });

  test("GET Books should return 200", () => {
    expect(response.status).toEqual(200);
  });

  test("GET Books should return an array", () => {
    expect(Array.isArray(response.data)).toEqual(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("Each book should have required fields", () => {
    const book = response.data[0];

    expect(book).toHaveProperty("id");
    expect(book).toHaveProperty("title");
    expect(book).toHaveProperty("description");
    expect(book).toHaveProperty("pageCount");
    expect(book).toHaveProperty("excerpt");
    expect(book).toHaveProperty("publishDate");

    expect(typeof book.id).toEqual("number");
    expect(typeof book.title).toEqual("string");
    expect(typeof book.description).toEqual("string");
    expect(typeof book.pageCount).toEqual("number");
    expect(typeof book.excerpt).toEqual("string");
    expect(typeof book.publishDate).toEqual("string");
  });

  test("Response should match JSON Schema", () => {
      const validation = validator.validate(response.data, booksSchema);
      expect(validation.valid).toEqual(true);
  });

  test("Content-Type header should contain JSON", () => {
    expect(response.headers["content-type"]).toContain("application/json");
  });

  test("GET invalid endpoint should return 404", async () => {
    try {
      await axios.get(`${BASE_URL}123`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });
});
