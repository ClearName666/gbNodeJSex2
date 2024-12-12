
const colors = require("colors");

const {calculateResultSum} = require("./calculateResultSum");

const totel = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(totel > 50 ? colors.red(totel) : colors.green(totel));


/*const http = require("http");
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end("<a href='/about'>обо мне</a>");
    } else if (req.url === "/about") {  
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end("<a href='../'>главная</a>");
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end("<a href='../'>404 на главную</a>");
    }

    console.log("Зпрос получен");
});

const port = "8080";

server.listen(port);*/
