// 
const http = require("http");

const server = http.createServer((req, res) => {
     
    if (req.url === "/"){
        res.write('Hey');
        res.end();
} 
    if (req.url === "/api/courses"){
        res.write(JSON.stringify([1,2,3]));
        res.end();
}
});
// начинаем прослушивать подключения на 3000 порту
server.listen(3000);
console.log('Listening on 3000');