// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
app.use(function(request, response, next){
     
    console.log("Middleware 1");
    next();
});
app.use(function(request, response, next){
     
    console.log("Middleware 2");
    next();
});
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    console.log("Route /");
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);