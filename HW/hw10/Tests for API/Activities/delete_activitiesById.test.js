const axios = require("axios");

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

let deleteResponse;

const activityId = 123;

const testActivity = {
  id: activityId,
  title: "Activity to delete",
  dueDate: "2025-11-23T20:00:00.000Z",
  completed: false
};

describe("DELETE Activities/{id} — API Tests", () => {

  beforeAll(async () => {
    await axios.post(BASE_URL, testActivity, {
      headers: { "Content-Type": "application/json; v=1.0" }
    });
  });


  test("DELETE Activities/{id} should return 200", async () => {
    deleteResponse = await axios.delete(`${BASE_URL}/${activityId}`);
    expect(deleteResponse.status).toEqual(200);
  });

  test("Deleted Activity should not be accessible anymore (GET → 404)", async () => {
    try {
      await axios.get(`${BASE_URL}/${activityId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });


  test("DELETE non-existing id should return 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/999999`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

  test("DELETE with invalid id (string) should return 400", async () => {
    try {
      await axios.delete(`${BASE_URL}/abc`);
    } catch (err) {
      expect(err.response.status).toEqual(400);
    }
  });

  test("DELETE already deleted id should also return 404", async () => {
    try {
      await axios.delete(`${BASE_URL}/${activityId}`);
    } catch (err) {
      expect(err.response.status).toEqual(404);
    }
  });

});
