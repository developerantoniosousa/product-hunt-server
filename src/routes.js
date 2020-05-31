const router = require('express').Router()

const ProductController = require('./controllers/ProductController')

router.get('/products', ProductController.index)
router.get('/products/:id', ProductController.show)
router.post('/products', ProductController.store)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.delete)

module.exports = router