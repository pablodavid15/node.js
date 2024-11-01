const Sequelize = require('sequelize'); // Chamado o sequelize para conectar o banco
const { FORCE } = require('sequelize/lib/index-hints');
const sequelize = new Sequelize('lobos', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mariadb',  // fazendo a conexão com banco, primeiro parâmentro com a tabela o usuario a senha e objeto json com as {}
    dialect: 'mariadb' // Dizer qual servdor esta o banco, no caso na minha maquina //que tipo de banco de dados esta conectando
});

sequelize.authenticate().then(function(){
    console.log('ok')
}).catch(function(erro){
    console.log(`erro: ${erro}`)
})

const Membros = sequelize.define('membros', {
    nome:{
        type: Sequelize.STRING(15)
    }, 
    cor: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }

})

Membros.create({
    nome: 'Cristova',
    cor: 'Verde',
    idade: 18
})

// Membros.sync({FORCE: true})

