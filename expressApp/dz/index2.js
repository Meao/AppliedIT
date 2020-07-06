// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
app.use(express.json());
const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];
// определяем обработчик для маршрута "/"
app.get("/", (req, res) => {
    // отправляем ответ
    res.send("Hey!");
});
app.get("/api/courses", (req, res) => {
    res.send(courses);
});
app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000;
// начинаем прослушивать подключения на порту
app.listen(port, () => console.log(`Listening on port ${port}`));