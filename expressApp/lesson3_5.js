// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// определяем обработчик для маршрута "/"
app.use("/home/foo/bar",function (request, response) {
    // отправляем ответ : 
    response.status(404).send(`Ресурс не найден`);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);