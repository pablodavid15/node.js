var http = require('http'); // chamando o parametro HTTP

http.createServer(function(req, res){ // aprindo um servidor http
    res.end('Hello, World! Welcome to my website!'); // Enviando mensagem com parametro end
}).listen(8081);

console.log('O servidor estar online!!'); // Indicando que servidor esta ativo