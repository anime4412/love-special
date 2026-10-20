const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8090;
const filePath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache'
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`[20-10] Server running at http://localhost:${PORT}/`);
});
