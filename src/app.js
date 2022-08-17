const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv-safe').config();

// Importa a função que conecta com o banco de dados
const db = require('./database/config')

// Importa as rotas dos usuários
const userRoutes = require('./routes/userRoutes')

// Importa as rotas dos produtos
const productRoutes = require('./routes/productRoutes')

// Chama a função de conecta a api com o banco
db.connect()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productRoutes)

module.exports = app