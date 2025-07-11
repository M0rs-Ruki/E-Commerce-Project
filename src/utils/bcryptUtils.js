

import bcrypt from 'bcrypt';

const bcryptPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

const bcryptCompare = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
}

export { bcryptPassword, bcryptCompare };