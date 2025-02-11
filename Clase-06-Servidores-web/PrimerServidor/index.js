import http from 'http';

const port = 8081;

const server = http.createServer(
    (request, response) => {
        response.end("¡Mi primer hola mundo backend!")
    }
);

//por defecto usa localhost o 127.0.0.1
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})