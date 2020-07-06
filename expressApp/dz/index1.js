// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();

// определяем обработчик для маршрута "/"
app.get("/", (req, res) => {
    // отправляем ответ
    res.send("Hey!");
});
app.get("/api/courses", (req, res) => {
    res.send([1,2,3]);
});
// all posts for a given year
app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params.year);
});

const port = process.env.PORT || 3000;
// начинаем прослушивать подключения на порту
app.listen(port, () => console.log(`Listening on port ${port}`));