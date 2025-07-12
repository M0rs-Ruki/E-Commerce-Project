
import express from 'express';
import multer from 'multer';
import isLoggedIn from '../middlewares/isLoggedIn.middleware';

const upload = multer();
const router = express.Router();

router.get('/', (req, res) => {
    const error = req.flash('error');
    res.render('index', { error });
});

router.get('/shop', isLoggedIn, (req, res) => {
    res.render('shop');
});

export default router;