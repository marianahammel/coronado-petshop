const mongoose = require('mongoose')

// Define as informações dos usuários
const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    address: [
        {
            zipCode: {
                type: String,
                require: true
            },
            street: {
                type: String,
                require: true
            },
            numberOf: {
                type: Number,
                require: true
            },
            district: {
                type: String,
                require: true
            },
            city: {
                type: String,
                require: true
            },
            state: {
                type: String,
                require: true
            },
        },
    ],
    createdAt: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model('user', userSchema)