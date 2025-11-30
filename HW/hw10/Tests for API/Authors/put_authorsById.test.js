const axios = require("axios");
const validator = require("jsonschema");
const authorSchema = require("../schemas/authors_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Authors";

let putResponse;
const authorId = 9999;
const updatedAuthor = {
  id: authorId,
  idBook: 1,
  firstName: "Jane",
  lastName: "Smith"
};

describe("PUT /Authors/{id} — API Tests", () => {

  beforeAll(async () => {
    putResponse = await axios.put(`${BASE_URL}/${authorId}`, updatedAuthor, {
      headers: { "Content-Type": "application/json; v=1.0" }
    });
  });

  test("PUT should return 200", async  () => {
    expect(putResponse.status).toEqual(200);
  });

  test("Response should contain updated author", async () => {
    const data = putResponse.data;
    expect(data.firstName).toEqual(updatedAuthor.firstName);
    expect(data.lastName).toEqual(updatedAuthor.lastName);
  });

  test("Response should match JSON Schema", async () => {
    const validation = validator.validate(putResponse.data, authorSchema);
    expect(validation.valid).toEqual(true);
  });


  test("PUT with non-existing ID should return 404 or create new item (API-specific behavior)", async () => {
    const nonExistingId = 123456;
    try {
      const res = await axios.put(`${BASE_URL}/${nonExistingId}`, updatedAuthor, {
        headers: { "Content-Type": "application/json; v=1.0" }
      });
      expect([200, 404]).toContain(res.status);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("PUT with invalid ID format should return 400", async () => {
    try {
      await axios.put(`${BASE_URL}/abc`, updatedAuthor, {
        headers: { "Content-Type": "application/json; v=1.0" }
      });
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });
});
