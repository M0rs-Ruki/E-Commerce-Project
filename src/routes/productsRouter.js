
import express from 'express';
import Product from '../models/products.model.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', (req, res) => {
    res.send('Products Home Page');
});


export default router;