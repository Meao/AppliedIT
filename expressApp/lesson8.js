// подключение express
const express = require("express");
const bodyParser = require("body-parser");
// создаем объект приложения 
const app = express();
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
  
app.get("/", function(request, response){
    response.send("Главная страница");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);