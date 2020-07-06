// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// В данном случае параметр маршрута называется "productId". 
// Через коллекцию request.params можно получить все параметры и, в частности, значение параметра productId.
// go to localhost:3000/products/whaterver - whaterver can be [A-Za-z0-9_]
app.get("/products/:productId", function (request, response) {
    response.send("productId: " + request.params["productId"])
  });
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);