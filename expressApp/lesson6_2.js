// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// перенаправление с ресурса "/home" на ресурс "/about", то есть, условно говоря, с http://localhost:3000/home на http://localhost:3000/about
app.use("/home",function (request, response) {
    response.redirect("about")
  });
app.use("/about", function (request, response) {
    response.send("<h1>About</h1>");
  });
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);