const Sequelize = require('sequelize') // Chamado o sequelize para conectar o banco
const sequelize = new Sequelize('test', 'root', '', {  // fazendo a conexão com banco, primeiro parâmentro com a tabela o usuario a senha 
    host: "localhost", // local 
    dialect: 'mariadb'
})