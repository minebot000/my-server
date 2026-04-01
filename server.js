const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Akhil's server is live 😏🔥");
    res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);
