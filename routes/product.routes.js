import {Router} from 'express'
import fileUpload from 'express-fileupload'
import {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getProduct
} from '../controllers/products.controller.js'

const router=Router()


router.get('/products',getProducts)

router.post('/products',
          fileUpload({useTempFiles:true, tempFileDir:'./uploads'}),
          createProducts)

router.put('/products/:id',updateProducts)

router.delete('/products/:id',deleteProducts)
router.get('/products/:id',getProduct)

export default router