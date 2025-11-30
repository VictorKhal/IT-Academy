const axios = require('axios');
const validator = require('jsonschema');
const postValidSchema = require('../schemas/users_post.v1.json')

describe("API test user creation", function() {
    let userResponse;
    beforeAll( async() => {
         userResponse = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users", {
            "Content-Type": "application/json; v=1.0"
        }, {
            "id": 25,
            "userName": "User 25",
            "password": "Password25"
        });
    });
    test("POST users valid value", async() => {
        await expect(userResponse.status).toEqual(200); 
    });

     test("POST users should return valid response body", async() => {
        const validationResult = await validator.validate(userResponse.data, postValidSchema);
        await expect(validationResult.valid).toEqual(true); 
    });
    
    test("POST users invalid value URL", async() => {
        try {
            userResponse = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users123", {
            "Content-Type": "application/json; v=1.0" }, {
            "id": 25,
            "userName": "User 25",
            "password": "Password25"
        });
        } catch(err) {
            userResponse = err.response
        }
        await expect(userResponse.status).toEqual(404);
    });
    test("POST users invalid value name", async() => {
        try {
            console.log("Тут баг(Имя отправляется строкой). В свагере приходит статус 400. Тут статус 200. тоже самое с паролем и ID");
            userResponse = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users",
                {
                    "Content-Type": "application/json; v=1.0" 
                },
                {
                    "id": 25,
                    "userName": "User25",
                    "password": 25
                }
            );
          
        } catch(err) {
            userResponse = err.response;
        }
        await expect(userResponse.status).toEqual(400);
    });
}) 