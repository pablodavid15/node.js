//Carregando Modulos
    //Importando o express
    const express = require('express')
    const app = express()

    // Handlebars
        const handlebars = require('express-handlebars')

    //Mongoosse
        const mongoose = require('mongoose')

//Configurações 
    

//Rotas

//Servidor HTTP
    const port = 8081
    app.listen(port, () => {
        console.log('Servidor online, na url http://localhost:8081')
    })