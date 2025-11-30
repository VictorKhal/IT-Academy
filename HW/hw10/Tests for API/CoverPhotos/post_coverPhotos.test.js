const axios = require("axios");
const validator = require("jsonschema");
const coverPhotoSchema = require("../schemas/coverPhotos_post.v1.json");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos";


describe("POST CoverPhotos — API Tests", () => {
  let response;

  const validate = {
    id: 100,
    idBook: 100,
    url: "string100"
  };

  beforeAll(async () => {

    response = await axios.post(
      BASE_URL,
      validate,
      {
        headers: {
          "accept": "text/plain; v=1.0",
          "Content-Type": "application/json; v=1.0"
        }
      }
    );
  });

  test("POST CoverPhotos returns 200", async () => {
    expect(response.status).toEqual(200);
  });

  test("Response body contains created object adn correct types",async () => {
    expect(response.data).toHaveProperty("id", validate.id);
    expect(response.data).toHaveProperty("idBook", validate.idBook);
    expect(response.data).toHaveProperty("url", validate.url);

    expect(typeof response.data.id).toEqual("number");
    expect(typeof response.data.idBook).toEqual("number");
    expect(typeof response.data.url).toEqual("string");
  });

  test("POST CoverPhotos response matches JSON Schema",async () => {
    const result = validator.validate(response.data, coverPhotoSchema);
    expect(result.valid).toEqual(true);
  });

  test("POST CoverPhotos without body should return 400", async () => {
    try {
      await axios.post(BASE_URL, {}, {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      expect(response.status).toEqual(400);
    }
  });

  test("POST CoverPhotos with invalid type returns 400", async () => {
    const invalidBody = {
      id: "string",
      idBook: "wrong",
      url: 123
    };

    try {
      await axios.post(BASE_URL, invalidBody, {
        headers: { "Content-Type": "application/json; v=1.0" }
      });
    } catch (err) {
      expect(response.status).toEqual(400);
    }
  });

  test("POST CoverPhotos to invalid endpoint returns 404", async () => {
    try {
      await axios.post(`${BASE_URL}123`, validate);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

});
