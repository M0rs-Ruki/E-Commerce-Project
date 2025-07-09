
import express from 'express';
import Owner from '../models/owners.model.js';


const router = express.Router();


if (process.env.NODE_ENV === 'development') {
    router.post('/create', (req, res) => {
        res.send('Owners Create Page');
    });
}



router.get('/', (req, res) => {
    res.send('Owners Home Page');
});




export default router;