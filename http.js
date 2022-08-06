const http= require('http');

const server = http.createServer((req, res)=>{
    res.write('hello programmer!');
    res.write('How are you doing');
    res.end();
});

server.listen(3000)

console.log('listening on post 3000');
