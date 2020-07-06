// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
  
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/index.html");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);