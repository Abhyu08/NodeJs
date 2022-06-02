const { readFileSync } = require('fs');
const http = require('http');

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
//media types : text/*
const server = http.createServer();
server.on("request", (request, response) => {

    if (request.url == "/") {
        const homePage = readFileSync("./navbar-app/index.html");
        response.writeHead(200, { 'content-type': 'text/html' });//metadata : status-code then {key-value pairs..}
        response.write(homePage);
        response.end();
    } else if (request.url == "/styles.css") {
        const homeStyles = readFileSync("./navbar-app/styles.css");
        response.writeHead(200, { 'content-type': 'text/css' });//metadata : status-code then {key-value pairs..}
        response.write(homeStyles);
        response.end();
    } else if (request.url == "/browser-app.js") {
        const homescript = readFileSync("./navbar-app/browser-app.js");
        response.writeHead(200, { 'content-type': 'text/javascript' });//metadata : status-code then {key-value pairs..}
        response.write(homescript);
        response.end();
    } else if (request.url == "/logo.svg") {
        const homeImg = readFileSync("./navbar-app/logo.svg");
        response.writeHead(200, { 'content-type': 'image/svg+xml' });//metadata : status-code then {key-value pairs..}
        response.write(homeImg);
        response.end();
    }
    else if (request.url == "/about") {
        console.log(request.url);
        response.writeHead(200, { 'content-type': 'text/html' });//metadata : status-code then {key-value pairs..}
        response.write("<h1>About!</h1>");
        response.end();
    } else {
        console.log(request.url);
        response.writeHead(404, { 'content-type': 'text/html' });//metadata : status-code then {key-value pairs..}
        response.write("<h1>404!Not Found</h1>");
        response.end();
    }

});

server.listen(5000, () => {
    console.log(`Server is Listening on port 5000...`);
});