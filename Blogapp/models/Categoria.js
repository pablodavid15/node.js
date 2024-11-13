const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Categoria = new Schema({
    nome: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

const categoria = mongoose.model('categorias', Categoria)