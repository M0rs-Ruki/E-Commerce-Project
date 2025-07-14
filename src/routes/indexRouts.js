
import express from 'express';
import isLoggedIn from '../middlewares/isLoggedIn.middleware.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';

const router = express.Router();

router.get('/', (req, res) => {
    const error = req.flash('error');
    res.render('index', { error, loggedin: false });
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

        const success = req.flash('success');

        res.render('shop', { 
            products: processedProducts,
            currentSort: sortOption,
            success,
            loggedin: true 
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching products',
            error: err.message
        });
    }
});

router.get('/cart', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findOne({email: req.user.email});
        const products = await Product.find({ _id: { $in: user.cart } });
        res.render('cart', { products });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching cart',
            error: err.message
        });
    }
})

router.get('/wishlist', isLoggedIn, async (req, res) => {
    try {
        const user = await User.findOne({email: req.user.email});
        const products = await Product.find({ _id: { $in: user.cart } });
        res.render('wishlist', { products });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching cart',
            error: err.message
        });
    }
})

router.get('/add-to-cart/:productId', isLoggedIn, async (req, res) => {
    const user = await User.findOne({email: req.user.email});
    user.cart.push(req.params.productId);
    await user.save();
    req.flash('success', 'Product added to cart');
    res.redirect('/shop');
})

router.get('/logout', isLoggedIn, (req, res) => {
    res.render('shop')
})
export default router;