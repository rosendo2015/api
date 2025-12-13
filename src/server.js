import http from 'node:http';

const server = http.createServer((req, res) => {
    return res.end('Sucesso!');
});

server.listen(3333);
console.log('Servidor rodando na porta 3333');