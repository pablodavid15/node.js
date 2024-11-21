//Carregando Modulos
    //Importando o express
        const express = require('express')
        const app = express()

    // Handlebars
        const handlebars = require('express-handlebars')

    //Mongoosse
        const mongoose = require('mongoose')

    //path
        const path = require('path')

    //Carregando o session
        const session = require('express-session')
    
    //Carregando o connect-flash
        const flash = require('connect-flash')
    
    //importando rotas
        //adm
        const admin = require('./routes/admin')

//Configurações

    //Sessão
        app.use(session({
            secret: "p%Q5eFm",
            resave: true,
            saveUninitialized: true
        }))

    //flash
        app.use(flash())

    //configurando middlewares
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next()
        })

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
        mongoose.Promise = global.Promise
        mongoose.connect("mongodb+srv://Pablo_David:20osaCgLGG9hKYfX@cluster0.khop5.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0",).then(() => {
            console.log('Banco conectado com sucesso')
        }).catch((err) => {
            console.log(`Erro ao conectar: ${err}`)
        })
    //Public
        app.use(express.static(path.join(__dirname,"/public"))) //dizendo o caminho absoluto para pasta 'public'

    
//Rotas
    //adm
        app.use('/admin', admin)

//Servidor HTTP
    const port = 8081
    app.listen(port, () => {
        console.log('Servidor online, na url http://localhost:8081')
    })