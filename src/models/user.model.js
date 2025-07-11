
// full name - string
// email - string
// password - string
// cart - array
// isAdmin - Boolean
// orders - array
// wishlist - string
// contact - number
// picture - string

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: {type: Array, default: []},
    orders: {type: Array, default: []},
    wishlist: {type: Array, default: []},
    contact: {type: Number, },
    picture: {type: String, }
})

const User  = mongoose.model('User', userSchema);
export default User;