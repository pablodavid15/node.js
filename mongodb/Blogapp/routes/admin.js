// configuração da rota adm
    const express = require('express')
    const router = express.Router()

// rota
router.get('/', (req, res) => {
    res.send('Pagina Principal do painel ADM')
})

router.get('/posts', (req, res) => {
    res.send('Pagina de Posts')
})

router.get('/categorias', (req, res) => {
    res.send('Pagina de categorias')
})

// exportando a rota
module.exports = router
