'use strict'

// клас умовної бази даних
class Database {
    constructor() {
        this.data = ["Tom", "Sam", "Bob"];
    }

    // отримання даних
    getItem(index) {
        this.open();
        try {
            if (index > 0 && index < this.data.length)
                return this.data[index];
            else
                throw "Некорректный индекс";
        } finally {    // навіть якщо згенеровано помилку, то цей блок виконується
            this.close();   // під час генерації throw цей рядок також буде виконуватися
        }
    }

    // відкриття БД
    open() {
        console.log("Підключення до бази даних встановлено");
    }

    // закриття БД
    close() {
        console.log("Підключення до бази даних закрито");
    }
}

const db = new Database();
try {
    db.getItem(7);  // повертаємо отриманий елемент
} catch (err) {
    console.error(err); // якщо сталася помилка, обробляємо її
}