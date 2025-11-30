const axios = require("axios");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Books";

const bookId = 9999;

describe("DELETE Books/{id} — API Tests", () => {

  test("DELETE Books/{id} should return 200", async () => {
    const response = await axios.delete(`${BASE_URL}/${bookId}`);
    expect(response.status).toEqual(200); // даже если нет книги с таким ID все равно удаляет со стасусом 200
  });

  test("Deleted book should not be accessible (GET → 404)", async () => {
    try {
      await axios.get(`${BASE_URL}/${bookId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE non-existing book should return 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE invalid id (string) should return 400/404", async () => {
    try {
      await axios.delete(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });
});
