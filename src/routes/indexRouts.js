
import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.middleware.js';
import Product from '../models/product.model.js';

const router = express.Router();

router.get('/', (req, res) => {
    const error = req.flash('error');
    res.render('index', { error });
});

router.get('/shop', isLoggedIn, async (req, res) => {
    try {
        const sortOption = req.query.sortby || 'popular';
        const sortCriteria = {
            'popular': { rating: -1 },
            'newest': { createdAt: -1 }
        };

        const products = await Product.find().sort(sortCriteria[sortOption]);
        
        const processedProducts = products.map(product => {
            const productObj = product.toObject();
            
            if (productObj.Image && productObj.Image.data) {
                productObj.Image.base64 = productObj.Image.data.toString('base64');
                productObj.Image.contentType = productObj.Image.contentType || 'image/jpeg';
            }
            return productObj;
        });

        res.render('shop', { 
            products: processedProducts,
            currentSort: sortOption 
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching products',
            error: err.message
        });
    }
});

router.get('/logout', isLoggedIn, (req, res) => {
    res.render('shop')
})

export default router;