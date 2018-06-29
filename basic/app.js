const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body>');
    res.end('</html>');
});

server.listen(port, hostname,() => {
    console.log(`Server is running at http://${hostname}:${port}`);
});