import express from 'express';
import { 
    getProduct, 
    getProductReviews, 
    getProductOffers, 
    getProductBySearch 
        } from '../controllers/products.js';

const router = express.Router();

router.get('/:productId/:apiKey', getProduct );
router.get('/:productId/reviews/:apiKey', getProductReviews );
router.get('/:productId/offers/:apiKey', getProductOffers );
router.get('/search/:searchQuery/:apiKey', getProductBySearch );

export default router;