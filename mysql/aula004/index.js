const express = require('express'); //chamando o modulo express na pasta node
const app = express(); // função do express, cria uma estancia(copia) principal 

app.get('/', function(req, res){ // função de callback rota-principal
    res.send('Seja bem-vindo ao meu site!') // enviando um menssagem na tela com parametro send
});

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre!'); //segunda rota, sebre
});

app.get('/blog', function(req, res){
    res.send('Bem-vindo ao meu blog!'); //terceira rota, blog
});

app.listen(8081, function(){//Funçap listen sempre no fial
    console.log('Servidor online, na url http://localhost:8081')//aparece a messagem no console
}); //porta do servidor http

