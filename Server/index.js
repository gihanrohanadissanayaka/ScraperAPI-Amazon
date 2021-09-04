import express from 'express';
import productsRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 5000 ;
app.use(express.json());

app.get('/', ( req, res ) => {
    res.send('Hi there, Connect mura developer API with you');
})

// http://localhost:5000/products/product_id/api_key
// http://localhost:5000/products/product_id/reviews/api_key
// http://localhost:5000/products/product_id/offers/api_key
// http://localhost:5000/products/search/searchQuery/api_key

app.use('/products', productsRoutes);

app.listen( PORT, () => console.log('Server running in 5000'));
