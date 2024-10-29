const express = require('express'); //chamando o modulo express na pasta node
const app = express(); // função do express, cria uma estancia(copia) principal 

app.get('/', function(req, res){ // função de callback rota-principal
    // res.send('Seja bem-vindo ao meu site!') // enviando um menssagem na tela com parametro send
    res.sendFile(`${__dirname}/html/index.html`) // O parametro sendfile envia uma arquivo / __dirname uma vareavel para retorna o diretoria da aplicação.
});

app.get('/sobre', function(req, res){
    res.sendFile(`${__dirname}/html/sobre.html`); //segunda rota, sebre / O parametro sendfile envia uma arquivo / __dirname uma vareavel para retorna o diretoria da aplicação.
});

app.get('/blog', function(req, res){
    res.send('Bem-vindo ao meu blog!'); //terceira rota, blog
});

app.get('/ola/:cargo/:nome/:idade/:cor', function(req, res){ // Função de callback com parametros nome, idade, cargo é cor
    res.send(`<h1>Ola, ${req.params.nome} e uma prazer :)</h1>!<br><h2>Você tem ${req.params.idade} anos.</h2><br><h2>Você e ${req.params.cargo}.</h2><br><h3>Sua cor favorita ${req.params.cor}.</h3`) // Mostrando o parametro nome, idade, cargo é cor
    /*
    res.send(`<h2>Você tem ${req.params.idade} anos.</h2>`) // Idade 
    res.send(`<h2>Você e ${req.params.cargo}.</h2>`) // Cargo
    res.send(`<h3>Sua cor favorita ${req.params.cor}</h3>`)
    */
})

app.listen(8081, function(){ //Funçap listen sempre no fial
    console.log('Servidor online, na url http://localhost:8081')//aparece a messagem no console
}); //porta do servidor http

