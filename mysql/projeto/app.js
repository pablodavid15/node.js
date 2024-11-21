const express = require('express'); //chamando o modulo express na pasta node
const app = express(); // função do express, cria uma estancia(copia) principal  
const handlebars = require('express-handlebars'); // Chamado a bibioteca handlebars
const bodyParser = require('body-parser') //Chamndo o body parser
const Post = require('./models/Post') //Inportando o module Post da minha pasta

//config
//template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions:{
        allowProtoPropertiesByDefault:true, // Não se esquece para que aparece os dados no front
        allowProtoMethodsByDefault: true // Não se esquece para que aparece os dados no front
    }}))// configurando o handlebars como tamplate engine  o main e o template padrão da aplicação
    app.set('view engine', 'handlebars')//Template engine dizendo aonde esta meu main(template padrão)

//Body Parser configuração
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


//rotas
    app.get('/', function(req, res){ // Rota principal 
        Post.findAll({order: [['id', 'desc']]}).then(function(posts){ //Mostrando o posts na home / order para oderm que vai apercer colanco um parâmentro id e se vai ser decresente 'des'c ou cresente 'asc'
            // console.log(posts) mostrano os arrays no cmd
            res.render('home', {posts: posts})//Crianndo a variavel para envia para front
        })
        
    })

    app.get('/posters', function(req, res){ //Rota de Postagens
        res.render('forms') // enviando arquivo do formulario
    })

    app.post('/add', function(req, res){ //Rota que recebe os dados do formulario
        Post.create({ //Criando o novos Posts
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){ // Vendo se não teve um erro
            res.redirect('/')  //Não tento erro vai ser Redirecionado para rota principal
        }).catch(function(erro){ 
            res.send(`Erro no post criado: ${erro}`)// mesagem de erro
        })
    })
    
    app.get('/deletar/:id', function(req, res){ //Rota que delata as postagens apartir do id
        Post.destroy({where: {'id':  req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso')
        }).catch(function(erro){
            res.send(`Essa postagem não existe${erro}`)
        })
    })

// Abrindo o servido HTTP
    app.listen(8081, function () { //Função listen sempre no fial
        console.log('Servidor online, na url http://localhost:8081')//aparece a messagem no console
    }); //porta do servidor http
    
