import Product from '../models/Product.model'

export const createProduct = async (req, res) => {
	try {
		const { name, category, price, imgURL } = req.body
		const newProduct = new Product({ name, category, price, imgURL })
		const productSaved = await newProduct.save()
		res.status(201).json(productSaved)
	} catch (err) {
		console.log(`Error en el controlador al crear un producto ${err}`)
	}
}

export const getProducts = async (req, res) => {
	try {
		const dataBaseResponse = await Product.find()
		res.json(dataBaseResponse)
	} catch (err) {
		console.log(`Error al obtener productos en el product controller: ${err}`)
	}
}
export const getProductById = async (req, res) => {
	try {
		const dataBaseResponse = await Product.findById(req.params.id)
		res.status(200).json(dataBaseResponse)
	} catch (err) {
		res.status(403).send('Id equivocado')
		console.log(err)
	}
}
export const updateProductById = async (req, res) => {
	try {
		const dataBaseResponse = await Product.findOneAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		)
		res.status(201).json(dataBaseResponse)
	} catch (err) {
		console.log(`Error al actualizar producto en el product controller: ${err}`)
	}
}
export const deleteProductById = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id)
		res.status(200).json()
	} catch (err) {
		console.log(`Error en el controlador al eliminar un producto ${err}`)
	}
}
