const userSchema = require('../model/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

// Busca todos usuários cadastrados
const getAll = (req, res) => {
    userSchema.find((e, users) => {
        if (e) {
            res.status(500).send({ message: e })
        }
        res.status(200).send({ users })
    })
}

// Cria usuário
const createUser = (req, res) => {
    userSchema.findOne({ email: req.body.email }, async (e, user) => {

        // Verifica se usuário já existe 
        if (!user) {

            // faz hash da senha
            const hashedPassword = bcrypt.hashSync(req.body.password, 10)
            req.body.password = hashedPassword

            try {
                const newUser = new userSchema(req.body)

                const savedUser = await newUser.save()

                res.status(200).send({
                    'message': 'User created successfully',
                    savedUser
                })
            } catch (e) {
                console.log(`Error: ${e}`)
            }

        } else {
            res.status(405).send({
                'message': 'User already exists'
            })
        }
    })
}

// Faz autenticação de usuário
const login = (req, res) => {
    userSchema.findOne({ email: req.body.email }, (error, user) => {
        
        // Verifica se existe o usuário cadastrado
        if (!user) {
            return res.status(401).send({
                message: "User not found",
                email: `${req.body.email}`
            })
        } else {
            const validPassword = bcrypt.compareSync(req.body.password, user.password)

            // Verifica se a senha está correta
            if (!validPassword) {
                return res.status(401).send({
                    message: "Unauthorized login"
                })
            }
        
            // Gera token de autenticação
            const token = jwt.sign({ name: user.name }, SECRET)

            // Login autorizado
            res.status(200).send({
                message: "Authorized login",
                token
            })
        }
    })
}

module.exports = {
    createUser,
    getAll,
    login
}