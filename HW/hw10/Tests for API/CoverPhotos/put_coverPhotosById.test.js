const axios = require("axios");
const validator = require("jsonschema");
const schema = require("../schemas/coverPhotos_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos";

describe("PUT CoverPhotos/{id} — API Tests", () => {
  let response;
  const testId = 2;

  const validate = {
    id: testId,
    idBook: 200,
    url: "updated-url"
  };

  beforeAll(async () => {
    response = await axios.put(`${BASE_URL}/${testId}`, validate, {
      headers: { "Content-Type": "application/json; v=1.0" }
    });
  });

  test("PUT returns 200", () => {
    expect(response.status).toEqual(200);
  });

  test("Updated object returned", () => {
    expect(response.data).toHaveProperty("id", validate.id);
    expect(response.data).toHaveProperty("idBook", validate.idBook);
    expect(response.data).toHaveProperty("url", validate.url);
  });

  test("Matches Schema", () => {
    const result = validator.validate(response.data, schema);
    expect(result.valid).toEqual(true);
  });


  test("PUT with invalid body returns 400", async () => {
    const bad = { 
      id: "wrong", 
      idBook: "bad", 
      url: 123 
    };

    try {
      await axios.put(`${BASE_URL}/${testId}`, bad, {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      expect(err.response.status).toEqual(400)
    }
  });

  test("PUT to invalid id returns 404", async () => {
    try {
      await axios.put(`${BASE_URL}/999999`, validate);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("PUT with invalid id format returns 400", async () => {
    try {
      await axios.put(`${BASE_URL}/abc`, validate);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });
});
