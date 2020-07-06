// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
//Чтобы встроить компонент express.static в процесс обработки запроса, вызывается функция app.use(). Эта функция позволяет добавлять различные компоненты, которые еще называются middleware, в конвейер обработки запроса:
app.use(express.static(__dirname + "/public"));
// определяем обработчик для маршрута "/"
app.use("/", function(request, response){
    // отправляем ответ : 
    response.send("<h1>Главная страница</h1>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);