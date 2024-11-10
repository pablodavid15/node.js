const { FORCE } = require('sequelize/lib/index-hints')
const db = require('./db') //Importando o sequelize

// crindo os campos da tabela
    const Post = db.sequelize.define('postagens', { 
        titulo: {
            type: db.Sequelize.STRING
        },

        conteudo:{
            type: db.Sequelize.TEXT
        }
    })

//criando a tabelos
    // Post.sync({FORCE: true})

//exportando o Post
    module.exports = Post