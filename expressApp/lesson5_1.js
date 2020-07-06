// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// обработка запроса по адресу /about
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
// обработка запроса по адресу /contact
app.use("/contact", function(request, response){
    // отправляем ответ : 
    response.send("<h1>Контакты</h1>");
});
 
// обработка запроса к корню веб-сайта
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);