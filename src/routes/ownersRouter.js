
import express from 'express';
import Owner from '../models/owners.model.js';
import multer from 'multer';


const upload = multer();
const router = express.Router();

if (process.env.NODE_ENV === 'development') {
    router.post('/create',upload.none(), async (req, res) => {
        const owners = await Owner.find();
        if (owners.length > 0) {
            return res
            .status(400)
            .json({ message: 'Owner already exists' });
        }
        const { fullName, email, password } = req.body;
        
        if (!fullName || !email || !password) {
            return res
            .status(400)
            .json({ message: 'Please fill all the fields' });
        };
        
        const newOwner =  await Owner.create({
            fullName: fullName,
            email: email,
            password: password,
        })
        res.status(200).send(newOwner);
    });
}


router.get('/adminPage', upload.none(), (req, res) => {
    res.render('createproducts', {
        success: req.flash('success'),
        error: req.flash('error'),
        title: 'Create Products',
        user: req.user
    });
});




export default router;