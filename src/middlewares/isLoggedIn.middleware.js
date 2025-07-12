import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model.js';

dotenv.config({path: '../.env'});


const isLoggedIn = async function (req, res, next) {
    if (!req.cookies.token) {
        req.flash('error', 'You must be logged in to access this page.');
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        const user = await User
            .findOne({ email: decoded.email})
            .select('-password')
        req.user = user;
        next();
    } catch (error) {
        req.flash('error', 'You must be logged in to access this page.');
        return res.redirect('/login');
    }
}


export default isLoggedIn;