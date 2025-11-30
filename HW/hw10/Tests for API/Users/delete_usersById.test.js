const axios = require("axios");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Users";

let createdUserId;
let deleteResponse;

describe("DELETE /Users/{id} — API Tests", () => {

  beforeAll(async () => {
   
    const newUser = {
      id: 999,
      userName: "Username999",
      password: "Password999"
    };

    const createResponse = await axios.post(BASE_URL, newUser);
    createdUserId = createResponse.data.id;

    deleteResponse = await axios.delete(`${BASE_URL}/${createdUserId}`);
  });


  test("DELETE existing user should return 200", () => {
    expect(deleteResponse.status).toBe(200);
  });

  test("DELETE should return empty response body", () => {
    expect([null, "", {}, undefined]).toContain(deleteResponse.data);
  });

  test("DELETE the same user again should return 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/${createdUserId}`);
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });


  test("DELETE non-existing user should return 404", async () => {
    const nonExistingId = 123456;

    try {
      await axios.delete(`${BASE_URL}/${nonExistingId}`);
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });


  test("DELETE invalid ID format (string)", async () => {
    try {
      await axios.delete(`${BASE_URL}/abc`);
    } catch (err) {
      expect([400, 404]).toContain(err.response.status);
    }
  });


  test("DELETE negative ID", async () => {
    try {
      await axios.delete(`${BASE_URL}/-5`);
    } catch (err) {
      expect([400, 404]).toContain(err.response.status);
    }
  });


  test("DELETE with empty ID should fail", async () => {
    try {
      await axios.delete(`${BASE_URL}/`);
    } catch (err) {
      expect([400, 404, 405]).toContain(err.response.status);
    }
  });

});
