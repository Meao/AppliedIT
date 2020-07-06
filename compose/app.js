const http = require("http");

http.createServer((request, response)=>{
    console.log(`Request on port  ${process.env.PORT} request ${request.url}`);
    response.end(`JS by Krivcun. Look: ${process.env.HELLO_MESSAGE}`);
}).listen(process.env.PORT || 3000, ()=>{console.log(`The port is ${process.env.PORT}`)});