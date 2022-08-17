const app = require('./src/app')
const PORT = process.env.PORT

// Roda a api na porta 3000
app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`))