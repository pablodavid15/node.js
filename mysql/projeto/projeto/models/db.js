const Sequelize = require('sequelize') // Chamado o sequelize para conectar o banco

// conexão com o banco de dados
    const sequelize = new Sequelize('postapp', 'root', 'bia12345', { // fazendo a conexão com banco, primeiro parâmentro com a tabela o usuario a senha e objeto json com as {}
        host: 'localhost',  // Dizer qual servdor esta o banco, no caso na minha maquina
        dialect: 'mysql' //que tipo de banco de dados esta conectando
    })

// verificando a conexão
    sequelize.authenticate().then(function(){ // função auttheticate para verifica a conexão com banco / a funçao then mostrarar se tive conectado
        console.log('Banco conectado com sucesso!') //aparencendo no console se conectar com sucesso
    }).catch(function (erro) { // caso de um erro a função catch vai ser chamada
        console.log(`Banco não conectado ${erro}`) //aparencendo no console caso de erro
    })

// Exportando o sequelize
    module.exports = { 
        Sequelize: Sequelize,
        sequelize: sequelize
    }