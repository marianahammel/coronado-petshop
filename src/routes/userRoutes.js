const express = require('express')
const router = express.Router()

const userController = require('../controllers/usersControllers')

// Define as rotas pertencentes aos usuários
router.get('/all', userController.getAll)
router.post('/create', userController.createUser)
router.post('/login', userController.login)

module.exports = router