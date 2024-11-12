//Carregando Modulos
    //Importando o express
        const express = require('express')
        const app = express()

    // Handlebars
        const handlebars = require('express-handlebars')

    //Mongoosse
        const mongoose = require('mongoose')

    //importando rotas
        //adm
            const admin = require('./routes/admin')

    //Bootstrap
        const path = require('path')

//Configurações 
    //handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {
            allowProtoMethodsByDefault: true,
            allowProtoPropertiesByDefault: true
        }}))
        app.set('view engine', 'handlebars')

    //configuração express.json
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())

    //mongosse
    

    //Public
        app.use(express.static(path, path.join(__dirname,"public")))
//Rotas
    //adm
        app.use('/admin', admin)

//Servidor HTTP
    const port = 8081
    app.listen(port, () => {
        console.log('Servidor online, na url http://localhost:8081')
    })