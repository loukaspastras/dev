import express from 'express';
import product from './controllers/product.js';


const router = express.Router();


router.post('/addProduct', product.addProduct);
router.post('/getProduct', product.getProduct);
router.post('/deleteProduct', product.deleteProduct);
router.post('/updateProduct', product.updateProduct);

export default router;