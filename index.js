
const { readFile } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const path = {

}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readFile('./views/home.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.write(data);
            res.end();
        }

    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
