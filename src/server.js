import http from 'node:http';

const server = http.createServer((req, res) => {
    return res.end('Sucesso! Servidor rodando na porta 3333');
});

server.listen(3333);
