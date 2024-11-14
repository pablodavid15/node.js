// chamndo o mongodb
const mongoose = require("mongoose")

// schema para o model
    const {Schema} = mongoose 

// configuração do mongoose
   // funcion(){} == () => {}  'arrow function'   
        mongoose.Promise = global.Promise //evitar alguns erros durando cronstrução 
        mongoose.connect("mongodb://localhost/lobos", { //conectando com mongo
            
        }).then(() => {
            console.log('MongoDB conectado...')
        }).catch((erro => {
            console.log(`Erro ao se conecta no mongodb ${erro}}`)
        }))

// //models
        // defiindo model
            const UsuarioSchema = new Schema({

                nome: {
                    type: String,
                    required: true
                },

                sobrenome: {
                    type: String,
                    required: true
                },
                
                email: {
                    type: String,
                    required: true
                },

                idade: {
                    type: Number,
                    required: true
                },

                pais: {
                    type: String
                }
            },
            {timestamps: true}
        )

// criando model 
    const Usuario = mongoose.model('usuarios', UsuarioSchema)

// Inserindo dados
        new Usuario({
            nome: 'Paula',
            sobrenome: 'Beatriz',
            email: 'paula_biatest@gmail.com',
            idade: 17,
            pais: 'Brasil'
        }).save().then(() => {
            console.log('Salvo com sucesso!')
        }).catch((err) => {
            console.log(`Erro ao salva ${err}`)
        })