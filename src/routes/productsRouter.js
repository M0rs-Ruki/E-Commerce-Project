
import express from 'express';
import upload from '../configs/multer.congig.js';
import Product from '../models/product.model.js';


const router = express.Router();


router.post('/create', upload.single('image'), async (req, res) => {
    try {
        const { name, price, description, discount, bgColor, panelColor, textColor } = req.body;

        const product = await Product.create({
            Image: {
                data: req.file.buffer,
                contentType: req.file.mimetype // Store content type
            },
            name,
            price,
            description,
            discount,
            bgColor,
            panelColor,
            textColor
        })
        req.flash('success', 'Product created successfully');
        res.redirect('/api/owners/adminPage')
    } catch (err) {
        res.status(500).json({
            message: 'Error creating product',
            error: err.message
        });
    }
});

export default router;