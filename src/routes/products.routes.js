import { Router } from 'express'
const router = Router()

import * as controller from '../controllers/products.controller'

router.post('/', controller.createProduct)

router.get('/', controller.getProducts)

router.get('/:id', controller.getProductById)

router.put('/:id', controller.updateProductById)

router.delete('/:id', controller.deleteProductById)

export default router
