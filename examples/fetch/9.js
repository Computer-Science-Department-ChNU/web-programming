'use strict'

let json = '{ "age": 30 }'; // неповні дані

try {
    user = JSON.parse(json); // <-- не поставлено "let" перед user
    // ...
} catch (err) {
    console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
    // (але перехоплена помилка не пов’язана з JSON Error)
}