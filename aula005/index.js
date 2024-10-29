const express = require('express'); //chamando o modulo express na pasta node
const app = express(); // função do express, cria uma estancia(copia) principal 

app.get('/', function(req, res){ // função de callback rota-principal
    // res.send('Seja bem-vindo ao meu site!') // enviando um menssagem na tela com parametro send
    res.send('Hello!') // O parametro send so pode se chamado uma ver por get
});

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre!'); //segunda rota, sebre
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

