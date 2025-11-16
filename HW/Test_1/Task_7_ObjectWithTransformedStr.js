const CryptoJS = require('crypto-js');

function encrypt(str) {
    let encrypted = CryptoJS.SHA256(str).toString();
    return encrypted;
}

function ObjectWithTransformedStr (arr, encrypt) {
    const result = {};
    
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        const value = encrypt(key);
        result[key] = value;
    }
    console.log(result);
    return result;
}

const arr = ["asasmrfbhn", "I like riding", "13245"];
ObjectWithTransformedStr(arr, encrypt);