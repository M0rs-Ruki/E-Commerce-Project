

import User from '../models/user.model.js';
import generateToken from '../utils/generateTokenUtils.js';
import { bcryptPassword, bcryptCompare } from '../utils/bcryptUtils.js';



const registerUser = async (req, res) => {
try {
    let { email, password, fullName } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send({message: 'User already exists'});
    }

    if (!email || !password || !fullName) {
        return res.status(400).send({message: 'Missing required fields'});
    }

    const hashedPassword = await bcryptPassword(password);
    const newUser = new User({
        email,
        password: hashedPassword,
        fullName
    });

    await newUser.save();
    const token = generateToken(newUser);
    res.cookie('token', token);
    res.send(newUser);
    
} catch (error) {
    res.status(500).send({message: 'Internal Server Error in user registration'});
}};

const loginUser = async (req, res) => {
    req.flash('error', 'Invalid email or password');
    try {

        const { email, password } = req.body;
        // console.log(email, password);
        
        if (!email || !password) {
            return res.status(400).send({message: 'Email and password are required'});
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({message: 'User not found'});
        }

        const isPasswordValid = await bcryptCompare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({message: 'Invalid password'});
        }

        const token = generateToken(user);
        res.cookie('token', token);
        res.redirect('/shop');

    } catch (error) {
        res.status(500).send({message: 'Internal Server Error in user login'});
    }
}

const logout = (req, res) => {
    try {
        res.clearCookie('token');
        req.flash('success', 'Logged out successfully');
        res.redirect('/');
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error in user logout'});
    }
}


// Exporting the functions
export { registerUser, loginUser, logout };