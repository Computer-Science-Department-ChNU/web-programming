'use strict'

let json = '{ "age": 30 }'; // неповні дані
try {

    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Неповні дані: відсутнє поле name");
    }

    blabla(); // непередбачувана помилка

    alert(user.name);

} catch (err) {

    if (err instanceof SyntaxError) {
        alert("JSON Error: " + err.message);
    } else {
        throw err; // повторне викидання (*)
    }

}