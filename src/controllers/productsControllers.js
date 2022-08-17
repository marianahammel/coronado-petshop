const productSchema = require('../model/productSchema')

// Busca todos os produtos
const getAll = (req, res) => {
    productSchema.find((e, products) => {
        if (e) {
            res.status(500).send({ message: e })
        }
        res.status(200).send({ products })
    })
}

// Cria produtos
const createProduct = async (req, res) => {

    try {
        const newUser = new productSchema(req.body)

        const savedUser = await newUser.save()

        res.status(200).send({
            'message': 'Product registered successfully',
            savedUser
        })
    } catch (e) {
        console.log(`Error: ${e}`)
    }


}

module.exports = {
    createProduct,
    getAll
}