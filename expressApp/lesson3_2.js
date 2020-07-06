// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// определяем обработчик для маршрута "/"
app.use(function (request, response) {
    // отправляем ответ Отправка объекта:
    response.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Главная</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <h1>Главная страница</h1>
        <h3>Привет, Express</h3>
    </body>
    <html>`);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);