const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Postagem = new Schema({
    titulo: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    conteudo: {
        type: String,
        required: true
    },

    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categorias',
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

const postagem = mongoose.model('postagens', Postagem)