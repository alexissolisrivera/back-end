const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);

}

const generarToken = (data) => {
    return jwt.sign(
        {
            data
        },
        process.env.SECRET_JWT,
        { expiresIn: '8h' }
    );
};

const validarToken = (token) => {
    return jwt.verify(token, process.env.SECRET_JWT);
};

const decodeToken = (token) => {
    return jwt.decode(token);
};


module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken,
    decodeToken
};