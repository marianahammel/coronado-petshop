const express = require('express')
const router = express.Router()

const productController = require('../controllers/productsControllers')

// Define as rotas pertencentes aos produtos
router.get('/all', productController.getAll)
router.post('/create', productController.createProduct)

module.exports = router