const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
 const parsedUrl = url.parse(req.url, true);
 const queryParams = parsedUrl.query;

res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
if (queryParams.name) {
res.write(`Hello, ${queryParams.name}!`);
} else {
res.write('Hello, there!');
}
res.end()
});
const port = 3000;
server.listen(port, () => {
console.log(`Server running at <http://localhost>:${port}/`);
});
