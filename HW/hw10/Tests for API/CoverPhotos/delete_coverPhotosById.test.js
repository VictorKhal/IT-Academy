const axios = require("axios");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos";

describe("DELETE CoverPhotos/{id} — API Tests", () => {
  let response;
  const testId = 3;

  beforeAll(async () => {
    response = await axios.delete(`${BASE_URL}/${testId}`);
  });


  test("DELETE returns 200", () => {
    expect(response.status).toEqual(200);
  });

  test("Deleting same id again returns 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/${testId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE non-existing id returns 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE invalid id format returns 400", async () => {
    try {
      await axios.delete(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });
});
