// chamndo o mongodb
    const mongoose = require("mongoose")

// schema para o model
    const {Schema} = mongoose 

// configuração do mongoose
   // funcion(){} == () => {}  'arrow function'   
        mongoose.Promise = global.Promise //evitar alguns erros durando cronstrução 
        mongoose.connect("mongodb+srv://Pablo_David:20osaCgLGG9hKYfX@cluster0.khop5.mongodb.net/mongoapp?retryWrites=true&w=majority&appName=Cluster0", { //conectando com mongo
            
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
                    require: true
                },

                sobrenome: {
                    type: String,
                    require: true
                },
                
                email: {
                    type: String,
                    require: true
                },

                idade: {
                    type: Number,
                    require: true
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
            nome: 'Pablo',
            sobrenome: 'David',
            email: 'pablodavidtest@gmail.com',
            idade: 22,
            pais: 'Brasil'
        }).save().then(() => {
            console.log('Salvo com sucesso!')
        }).catch((err) => {
            console.log(`Erro ao salva ${err}`)
        })