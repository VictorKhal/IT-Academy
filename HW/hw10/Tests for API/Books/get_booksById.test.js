const axios = require("axios");
const validator = require("jsonschema");
const bookSchema = require("../schemas/books_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Books";

let response;
const validId = 1;

describe("GET Books/{id} — API Tests", () => {

  beforeAll(async () => {
    response = await axios.get(`${BASE_URL}/${validId}`);
  });

  test("GET Books/{id} should return 200", async () => {
    expect(response.status).toEqual(200);
  });

  test("Response should be an object with required fields", async () => {
    const book = response.data;
    expect(book).toHaveProperty("id", validId);
    expect(book).toHaveProperty("title");
    expect(book).toHaveProperty("description");
    expect(book).toHaveProperty("pageCount");
    expect(book).toHaveProperty("excerpt");
    expect(book).toHaveProperty("publishDate");

    expect(typeof book.title).toEqual("string");
    expect(typeof book.description).toEqual("string");
    expect(typeof book.pageCount).toEqual("number");
    expect(typeof book.excerpt).toEqual("string");
    expect(typeof book.publishDate).toEqual("string");
  });

  test("Response should match JSON Schema", async () => {
    const validation = validator.validate(response.data, bookSchema);
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
