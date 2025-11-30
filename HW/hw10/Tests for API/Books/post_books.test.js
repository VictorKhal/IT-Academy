const axios = require("axios");
const validator = require("jsonschema");
const bookSchema = require("../schemas/books_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Books";

let postResponse;

const newBook = {
  id: 9999,
  title: "New Book",
  description: "This is a test book.",
  pageCount: 123,
  excerpt: "Excerpt text...",
  publishDate: "2025-11-23T21:00:00Z"
};

describe("POST Books — API Tests", () => {

  beforeAll(async () => {
    postResponse = await axios.post(BASE_URL, newBook, {
      headers: { "Content-Type": "application/json; v=1.0" }
    });
  });

  test("POST should return 200", async () => {
    expect(postResponse.status).toEqual(200);
  });

  test("Response should contain created book", async () => {
    const book = postResponse.data;
    expect(book).toHaveProperty("id", newBook.id);
    expect(book.title).toEqual(newBook.title);
    expect(book.description).toEqual(newBook.description);
    expect(book.pageCount).toEqual(newBook.pageCount);
    expect(book.excerpt).toEqual(newBook.excerpt);
    expect(book.publishDate).toEqual(newBook.publishDate);
  });

  test("Response should match JSON Schema", async () => {
    const validation = validator.validate(postResponse.data, bookSchema);
    expect(validation.valid).toEqual(true);
  });


  test("POST missing fields should return error status 400", async () => {
    try {
      await axios.post(BASE_URL, { id: 100 });
    } catch (err) {
      expect(postResponse.status).toEqual(400);
    }
  });
  test("POST with empty body should return 400", async () => {
    try {
      await axios.post(BASE_URL, {});
    } catch (err) {
      expect(postResponse.status).toEqual(400);
    }
  });

  test("POST missing required fields should return 400", async () => {
    try {
      await axios.post(BASE_URL, { title: "Only title" });
    } catch (err) {
      expect(postResponse.status).toEqual(400);
    }
  });

  test("POST with invalid types should return 400", async () => {
    try {
      await axios.post(BASE_URL, {
        id: "abc",
        title: 123,
        description: false,
        pageCount: "many",
        excerpt: 123,
        publishDate: true
      });
    } catch (err) {
      expect(postResponse.status).toEqual(400);
    }
  });
});
