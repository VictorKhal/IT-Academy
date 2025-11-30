const axios = require('axios');
const validator = require('jsonschema');
const getValidSchema = require('../schemas/users_get.v1.json')

describe("API test GET users", function() {
    let userResponse;
    beforeAll(async () => {
      userResponse = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users");
    });
    test("GET users valid value", async() => {
        await expect(userResponse.status).toEqual(200); 
    });

     test("GET users should return valid response body", async() => {
        const validationResult = await validator.validate(userResponse.data, getValidSchema);
        await expect(validationResult.valid).toEqual(true); 
    });
    
    test("GET users invalid value", async() => {
        try {
           userResponse = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/user123");
        } catch(err) {
            userResponse = err.response
        }
        await expect(userResponse.status).toEqual(404);
    });
}) 