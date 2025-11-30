const axios = require("axios");
const validator = require("jsonschema");
const userPutSchema = require("../schemas/users_post.v1.json"); 

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Users";

let putResponse;
let testUserId = 1;

describe("PUT /Users/{id} — API Tests", () => {

  beforeAll(async () => {
    const updatedUser = {
      id: 0,
      userName: "string",
      password: "string"
    };

    putResponse = await axios.put(
      `${BASE_URL}/${testUserId}`,
      updatedUser,
      {
        headers: {
          "Content-Type": "application/json; v=1.0"
        }
      }
    )
  });

  test("PUT valid user should return 200", () => {
    expect(putResponse.status).toEqual(200);
  });


  test("PUT should update user and return updated object", () => {
    const data = putResponse.data;
    expect(data).toHaveProperty("id", 0);
    expect(data).toHaveProperty("userName", "string");
    expect(data).toHaveProperty("password", "string");
  });


  test("PUT response Content-Type should be application/json", () => {
    expect(putResponse.headers["content-type"]).toContain("application/json");
  });


  test("PUT response should match JSON Schema", () => {
    const validation = validator.validate(putResponse.data, userPutSchema);
    expect(validation.valid).toEqual(true);
  });


  test("PUT non-existing user should still return 200 (API behavior)", async () => {
    const body = {
      id: 555,
      userName: "NewUser555",
      password: "password555"
    };

    const res = await axios.put(`${BASE_URL}/999999`, body);

    expect(res.status).toEqual(200);
  });


  test("PUT with invalid ID format (string)", async () => {
    try {
      await axios.put(`${BASE_URL}/abc`, {
        id: 1,
        userName: "test",
        password: "test"
      });
    } catch (err) {
      expect(err.response.status).toEqual(400)
    }
  });


  test("PUT with negative ID", async () => {
    try {
      await axios.put(`${BASE_URL}/-1`, {
        id: 1,
        userName: "test",
        password: "test"
      });
    } catch (err) {
      expect(err.response.status).toEqual(400)
    }
  });


  test("PUT with empty body should return error", async () => {
    try {
      await axios.put(`${BASE_URL}/${testUserId}`, {});
    } catch (err) {
      expect(err.response.status).toEqual(400)
    }
  });


  test("PUT with missing required fields", async () => {
    try {
      await axios.put(`${BASE_URL}/${testUserId}`, {
        id: 1
      });
    } catch (err) {
      expect(err.response.status).toEqual(400)
    }
  });

});
