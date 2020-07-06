// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// передавать массивы данных В данном случае в приложение будет передаваться параметр name
app.get("/", function(request, response){
      
  response.send("<h1>Главная страница</h1>");
});
app.use("/about", function(request, response){
    
  console.log(request.query);
  let names = request.query.name;
  let responseText = "<ul>";
  for(let i=0; i < names.length; i++){
      responseText += "<li>" + names[i] + "</li>";
  }
  responseText += "</ul>";
  response.send(responseText);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);