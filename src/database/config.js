// Importa o mongoose
const mongoose = require('mongoose')

// Pega a URI de conexão com o Mongo das variáveis de ambiente
const MONGODB_URI = process.env.MONGODB_URI

// Função assíncrona que faz conexão com o banco de dados
const connect = async () => {
    // Bloco try/catch onde tenta realizar a conexão
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database successfully connected')
    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
}

// Exportando a função connect
module.exports = { connect }