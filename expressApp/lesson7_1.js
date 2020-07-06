// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// в запросе http://localhost:3000/about?id=3&name=Tome два параметра: параметр "id" имеет значение "3" и параметр "name" имеет значение "Tom".
app.get("/", function(request, response){
      
  response.send("<h1>Главная страница</h1>");
});
app.use("/about", function(request, response){
  // С помощью выражения request.query мы можем получить все параметры строки запрос в виде объекта javascript, а с помощью выражения request.query.название_параметра мы можем обратиться к каждому отдельному параметру.
  let id = request.query.id;
  let userName = request.query.name;
  response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);