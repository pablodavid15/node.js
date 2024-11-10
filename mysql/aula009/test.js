const Sequelize = require('sequelize') // Chamado o sequelize para conectar o banco
const sequelize = new Sequelize('teste', 'root', 'bia12345', {  // fazendo a conexão com banco, primeiro parâmentro com a tabela o usuario a senha e objeto json com as {}
    host: "localhost", // Dizer qual servdor esta o banco, no caso na minha maquina
    dialect: 'mysql' //que tipo de banco de dados esta conectando
})

sequelize.authenticate().then(function(){ // função auttheticate para verifica a conexão com banco / a funçao then mostrarar se tive conectado
    console.log('Conectado com sucesso!') //aparencendo no console
}).catch(function(erro){ // caso de um erro a função catch vai ser chamada
    console.log(`Falha na conexão: ${erro}`) // aparecendo no console
})
