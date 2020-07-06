// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// В данном случае параметр маршрута называется "productId". 
// Через коллекцию request.params можно получить все параметры и, в частности, значение параметра productId.
// go to localhost:3000/categories/whaterver/products/whaterver - whaterver can be [A-Za-z0-9_]
app.get("/categories/:categoryId/products/:productId", function (request, response) {
    let catId = request.params["categoryId"];
    let prodId = request.params["productId"];
    response.send(`Категория: ${catId}  Товар: ${prodId}`);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);