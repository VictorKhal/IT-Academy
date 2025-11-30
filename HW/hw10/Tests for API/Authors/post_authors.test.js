const axios = require("axios");
const validator = require("jsonschema");
const authorSchema = require("../schemas/authors_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Authors";

let postResponse;
const newAuthor = {
  id: 9999,
  idBook: 1,
  firstName: "John",
  lastName: "Doe"
};

describe("POST Authors — API Tests", () => {

  beforeAll(async () => {
    postResponse = await axios.post(BASE_URL, newAuthor, {
      headers: { "Content-Type": "application/json; v=1.0" }
    });
  });

  test("POST should return 200", () => {
    expect(postResponse.status).toEqual(200);
  });

  test("Response should contain created author", () => {
    const data = postResponse.data;
    expect(data).toHaveProperty("id", newAuthor.id);
    expect(data).toHaveProperty("idBook", newAuthor.idBook);
    expect(data).toHaveProperty("firstName", newAuthor.firstName);
    expect(data).toHaveProperty("lastName", newAuthor.lastName);
  });

  test("Response should match JSON Schema", () => {
    const validation = validator.validate(postResponse.data, authorSchema);
    expect(validation.valid).toEqual(true);
  });

  test("POST missing fields should return error", async () => {
    try {
      await axios.post(BASE_URL, { id: 100 });
    } catch (err) {
      expect([400, 500]).toContain(err.response.status);
    }
  });

});
