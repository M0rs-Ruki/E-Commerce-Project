
import express from 'express';


const router = express.Router();


router.get('/', (req, res) => {
    res.send('Products Home Page');
});


export default router;