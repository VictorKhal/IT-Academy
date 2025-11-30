const axios = require("axios");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Authors";

const authorId = 9999;

describe("DELETE Authors/{id} — API Tests", () => {

  test("DELETE Authors/{id} should return 200", async () => {
    const response = await axios.delete(`${BASE_URL}/${authorId}`);
    expect(response.status).toEqual(200);
  });

  test("Deleted author should not be accessible (GET → 404)", async () => {
    try {
      await axios.get(`${BASE_URL}/${authorId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE non-existing author should return 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE invalid id (string) should return 400", async () => {
    try {
      await axios.delete(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

});
