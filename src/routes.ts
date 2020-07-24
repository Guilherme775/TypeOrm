import { Router, Request, Response } from 'express'
import ProductController from './controller/ProductController'

const routes = Router()

const productController = new ProductController()

routes.get('/products', productController.index)

routes.post('/products', productController.create)

export default routes
