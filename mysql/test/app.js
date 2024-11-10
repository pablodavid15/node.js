const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Ola, bem-vindo ao meu site.')
});

app.get('/inicio', function(req, res){
    res.sendFile(`${__dirname}/html/index.html`)
})

app.get('/ola/:nome/:idade/:cor', function(req, res){
    res.send(`Ola, ${req.params.nome} e uma prazer :) !<br>Você tem ${req.params.idade} anos.<br>Sua cor favorita ${req.params.cor}.`)
})

app.listen(8182, function() {
    console.log('Servidor rodando na url http://localhost:8182')
});