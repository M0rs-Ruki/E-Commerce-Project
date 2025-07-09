
// full name - string
// email - string
// password - string
// products - array
// wishlist - string
// picture - string
// GST number - string
// addres - string

import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    products: {type: Array, default: []},
    wishlist: {type: Array, default: []},
    picture: {type: String, required: true},
    GSTnumber: {type: String, required: true},
    addres: {type: String, required: true}
})

const Owner = mongoose.model('Owner', ownerSchema);
export default Owner;