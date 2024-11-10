const Sequelize = require('sequelize') // Chamado o sequelize para conectar o banco
const { FORCE } = require('sequelize/lib/index-hints')
const sequelize = new Sequelize('test', 'root', 'bia12345', {  // fazendo a conexão com banco, primeiro parâmentro com a tabela o usuario a senha e objeto json com as {}
    host: "localhost", // Dizer qual servdor esta o banco, no caso na minha maquina
    dialect: 'mysql' //que tipo de banco de dados esta conectando
})

sequelize.authenticate().then(function(){ // função auttheticate para verifica a conexão com banco / a funçao then mostrarar se tive conectado
    console.log('Conectado com sucesso!') //aparencendo no console
}).catch(function(erro){ // caso de um erro a função catch vai ser chamada
    console.log(`Falha na conexão: ${erro}`) // aparecendo no console
})

const Postagem = sequelize.define('poster', { // Criando modeu para criação de tabelas com o define como o primeiro parâmentro nome da tabela e com objeto json os campos
    titulo: {  // nome do campo da tabela
        type: Sequelize.STRING // tipo do campo que vai ser o varchar
    },

    conteudo: { // nome do campo da tabela
        type: Sequelize.TEXT //tipo do campo que vai ser text
    }
}) 

Postagem.create({ // inserindo dados na tabela
    titulo: 'Ola consegui inserir dados',  //dado que vai no compo titulo
    conteudo: 'jsdbBASDBjhaVHOCLVCOCLCVKAvsovulvouvouvfevyoalavpfafbcpia' //Dados que vai no campo conteudo
})

const Usuario = sequelize.define('usuarios', {  // Criando modeu para criação de tabelas com o define como o primeiro parâmentro nome da tabela e com objeto json os campos
    nome: { // nome do campo da tabela
        type: Sequelize.STRING // tipo do campo que vai ser o varchar
    },

    sobrenome:{ // nome do campo da tabela
        type: Sequelize.STRING // tipo do campo que vai ser o varchar
    },

    idade: { // nome do campo da tabela
        type: Sequelize.INTEGER // tipo do campo que vai ser o int
    },

    email: { // nome do campo da tabela
        type: Sequelize.STRING // tipo do campo que vai ser o varchar
    }
})

Usuario.create({ // inserindo dados na tabela
    nome: 'Irineu', // dado que vai no compo nome
    sobrenome: 'Silva', // dado que vai no compo sobrenome
    idade: 20, // dado que vai no compo idade
    email: 'irineu_silvatest@gmail.com' // dado que vai no compo email
})

/*
 apois de usado comente o codigo ou delete
Postagem.sync({FORCE: true})
Usuario.sync({FORCE: true})

*/