// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// с ресурса "/home/bar" идет переадресация на ресурс "about", http://localhost:3000/home/about
app.use("/home/bar",function (request, response) {
    response.redirect("about")
  });
//тоже Переадресация относительно текущего адреса на адрес на том же уровне: response.redirect("./about")
//переадресацию не относительно текущего ресурса, а относительно корневого каталога приложения /about
//Переадресация на адрес, который располагается уровнем выше: response.redirect("../about")
//Переадресация на уровень выше: response.redirect(".")
//Переадресация на два уровня выше: response.redirect("..")
//можем указать статусный код 301, чтобы сделать переадресацию постоянной: response.redirect(301, "/about");

app.use("/home/about", function (request, response) {
    response.send("<h1>About</h1>");
  });
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);