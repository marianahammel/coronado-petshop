const mongoose = require('mongoose')

// Define as informações do produto
const productSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    inventory: {
        type: Number,
        require: true
    },
    details: [
        {
            title: {
                type: String,
                require: false
            },
            body: {
                type: String,
                require: false
            }
        }
    ],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('product', productSchema)