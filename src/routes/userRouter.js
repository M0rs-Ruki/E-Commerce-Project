
import express from 'express';
import multer from 'multer';
import {log} from 'console';
import {registerUser, loginUser, logout } from '../controllers/authController.js';

const upload = multer();
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Users Home Page');
});

router.post('/register',upload.none(), registerUser );

router.post('/login',upload.none(), loginUser );

router.get('/logout', logout);


export default router;