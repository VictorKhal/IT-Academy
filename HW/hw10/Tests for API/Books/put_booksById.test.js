const axios = require("axios");
const validator = require("jsonschema");
const bookSchema = require("../schemas/books_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Books";

let putResponse;

const bookId = 9999;
const updatedBook = {
  id: bookId,
  title: "Updated Book",
  description: "Updated description",
  pageCount: 200,
  excerpt: "Updated excerpt",
  publishDate: "2025-11-24T12:00:00Z"
};

describe("PUT Books/{id} — API Tests", () => {

  beforeAll(async () => {
    putResponse = await axios.put(`${BASE_URL}/${bookId}`, updatedBook, {
      headers: { "Content-Type": "application/json; v=1.0" }
    });
  });

  test("PUT should return 200", async () => {
    expect(putResponse.status).toEqual(200);
  });

  test("Response should contain updated book", async () => {
    const book = putResponse.data;
    expect(book.title).toEqual(updatedBook.title);
    expect(book.description).toEqual(updatedBook.description);
    expect(book.pageCount).toEqual(updatedBook.pageCount);
    expect(book.excerpt).toEqual(updatedBook.excerpt);
    expect(book.publishDate).toEqual(updatedBook.publishDate);
  });

  test("Response should match JSON Schema",async () => {
    const validation = validator.validate(putResponse.data, bookSchema);
    expect(validation.valid).toEqual(true);
  });

  test("PUT with invalid ID format should return 400", async () => {
    try {
      await axios.put(`${BASE_URL}/invalidStringID`, updatedBook, {
        headers: { "Content-Type": "application/json; v=1.0" }
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });


  test("PUT with empty body should return 400", async () => {
    try {
      await axios.put(`${BASE_URL}/${bookId}`, {}, {
        headers: { "Content-Type": "application/json; v=1.0" }
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

});
