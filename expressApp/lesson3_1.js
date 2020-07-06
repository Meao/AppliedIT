// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// определяем обработчик для маршрута "/"
app.use(function (request, response) {
    // отправляем ответ Отправка объекта:
    response.send(Buffer.from("Hello Express"));
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);