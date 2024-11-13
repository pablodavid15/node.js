// configuração da rota adm
    const express = require('express')
    const router = express.Router()

//chamando model externo
    const mongoose = require('mongoose')
    require('../models/Categoria')
    const Categoria = mongoose.model('categorias')

// rota
router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Pagina de Posts')
})

router.get('/categorias', (req, res) => {
    res.render('admin/categorias')
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(() => {
        console.log('Categoria salva com sucesso!')
    }).catch((err) => {
        console.log(`Não posivel salva categoria: ${err}`)
    })
})

// exportando a rota
    module.exports = router
