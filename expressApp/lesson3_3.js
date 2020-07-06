// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// определяем обработчик для маршрута "/"
app.use(function (request, response) {
    // отправляем ответ с помощью __dirname получаем абсолютный путь к текущему проекту:
    response.sendFile(__dirname + "/index3_3.html");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);