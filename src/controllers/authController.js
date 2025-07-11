

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
    try {
        
    } catch (error) {
        
    }
}

export { registerUser };