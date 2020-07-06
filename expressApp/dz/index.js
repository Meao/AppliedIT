const Joi = require("joi");
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
    const { error } = validateCourse(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
app.put("/api/courses/:id", (req, res) => {
    // Look up course
    // If inexistent, 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course ID was not found');
    // Validate
    // If invalid, 400
    // { error } equivalent to result.error
    const { error } = validateCourse(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    // Update
    course.name = req.body.name;
    res.send(course);
});
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course ID was not found');
    res.send(courses);
});
app.delete("/api/courses/:id", (req, res) => {
    // Look up course
    // If inexistent, 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course ID was not found');
    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // Return the same course
    res.send(course);
});
function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    }).required();
    return Joi. validate(course, schema);
}
const port = process.env.PORT || 3000;
// начинаем прослушивать подключения на порту
app.listen(port, () => console.log(`Listening on port ${port}`));