// configuração da rota adm
    const { text } = require('body-parser')
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
        Categoria.find().sort({date: 'desc'}).then((categorias) => {
            res.render('admin/categorias', {categorias: categorias})
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao lista as catedegorias')
            res.redirect('/admin')
        })
        
    })

    router.get('/categorias/add', (req, res) => {
        res.render('admin/addcategorias')
    })

    router.post('/categorias/nova', (req, res) => {
        
        var erros = [] //Validaçaõ de formularios

        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){ // validando a compo nome for nulo
            erros.push({
                texto: 'Nome inválido'
            })
        }

        if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){ // validando a compo slug for nulo
            erros.push({
                texto: 'Slug inálido'
            })
        }

        if(req.body.nome.length <= 2){ // validando o tamanho do nome
            erros.push({
                texto:'Nome da categoria muito pequena'
            })
        }

        if(req.body.slug.length <= 2){
            erros.push({
                texto: 'Slug muito pequeno'
            })
        }

        if(erros.length > 0){
            res.render('admin/addcategorias', {erros: erros})
        }

        
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }

        new Categoria(novaCategoria).save().then(() => {
            req.flash('success_msg', 'Categoria criada com sucesso!')
            console.log('Categoria salva com sucesso!')
            res.redirect('/admin/categorias')
        }).catch((err) => {
            req.flash('error_msg', 'Erro ao criar a categoria, tente novamente!')
            res.redirect('/admin/categorias')
        })
    })

    router.get('/categorias/edit/:id', (req, res) => {
        res.send('Pagina de edição de categoria')
    })
// exportando a rota
    module.exports = router
