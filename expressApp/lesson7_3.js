// подключение express
const express = require("express");
// создаем объект приложения 
const app = express();
// При передаче в строке запроса свойства объекта помещаются в квадратные скобки: user[id]=
app.use("/about", function(request, response){
      
  console.log(request.query);
  let id = request.query.user.id;
  let name = request.query.user.name;
   
  response.send("<h3>id:" + id + "<br>name: " + name +"</h3>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);