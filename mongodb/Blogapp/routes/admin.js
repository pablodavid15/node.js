// configuração da rota adm
    const { text } = require('body-parser')
    const express = require('express')
    const router = express.Router()

//chamando model externo
    const mongoose = require('mongoose')
    require('../models/Categoria')
    const Categoria = mongoose.model('categorias')
    require('../models/Postagem')
    const Postagem = mongoose.model('postagens')

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

    router.get('/categorias/edit/:id', (req, res) => {//editando as categorias
        Categoria.findOne({_id: req.params.id}).then((categoria) => {
            res.render('admin/editcategorias', {categoria: categoria})
        }).catch((err) => {
            req.flash('erro_msg', 'Esta categoria não existe')
            res.redirect('/admin/categorias')
        })
        
    })

    router.post('/categorias/edit', (req, res) => {

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
            res.render('admin/editcategorias', {erros: erros})
        }

        Categoria.findOne({_id: req.body.id}).then((categoria) => {
            categoria.nome = req.body.nome
            categoria.slug = req.body.slug
            
            categoria.save().then(() => {
                req.flash('success_msg', 'Categoria editada com sucesso!')
                res.redirect('/admin/categorias')
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro interno ao salvar')
                res.redirect('/admin/categorias')
            })

        }).catch((err) => {
            req.flash('error_msg', 'Houver um error ao editar a categoria')
            res.redirect('admin/categorias')
        })
    })

    router.post('/categorias/deletar/', (req, res) => {
        Categoria.deleteOne({_id: req.body.id}).then(() => {
            req.flash('success_msg', 'Categoria deletada com sucesso!')
            console.log(`Cadastrada a postagem com sucesso`)
            res.redirect('/admin/categorias')
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao delalar categoria')
            console.log(`Erro ao cadastrar postagem: ${err}`)
            res.redirect('/admin/categorias')
        })
    })

    router.get('/postagens', (req, res) => {
        Postagem.find().populate('categoria').sort({date: 'desc'}).then((postagens) => {
          res.render('admin/postagens', {postagens: postagens})  
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao listar as postagens')
            console.log(`Erro: ${err}`)
            res.redirect('/admin')
        })
        
    })

    router.get('/postagens/add', (req, res) => {
        Categoria.find().then((categorias) => {
            res.render('admin/addpostagem', {categorias: categorias})
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao carregar o formulário')
            res.redirect('/admin')
        })
    })

    router.post('/postagens/nova', (req, res) => {

        var erros = [] //Validaçaõ de formularios

        if(req.body.categoria == "0"){
            erros.push({texto: 'Categoria, inválida, registre uma categoria'})
        }

        if(erros.length > 0){
            res.render('admin/addpostagem', {erros: erros})
        }else {
                const novaPostagem = {
                    titulo: req.body.titulo,
                    descricao: req.body.descricao,
                    conteudo: req.body.conteudo,
                    categoria: req.body.categoria,
                    slug: req.body.slug
            }

            new Postagem(novaPostagem).save().then(() => {
                req.flash('success_msg', 'Postagem postada com sucesso')
                console.log(`Cadastrada a postagem com sucesso`)
                res.redirect('/admin/postagens')
            }).catch((err) => {
                req.flash('error_msg', 'Houve um erro ao postar')
                console.log(`Erro ao cadastrar postagem: ${err}`)
                res.redirect('/admin/postagens')
            })
        }
        
    })

// exportando a rota
    module.exports = router
