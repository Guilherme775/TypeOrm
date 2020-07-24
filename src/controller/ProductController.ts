import { getRepository } from 'typeorm'
import { Product } from '../entity/Product'
import { Request, Response } from 'express'

class ProductController {
  async index (req: Request, res: Response) {
    const products = await getRepository(Product).find()

    return res.json(products)
  }

  async create (req: Request, res: Response) {
    const product = await getRepository(Product).save(req.body)

    return res.json(product)
  }
}

export default ProductController
