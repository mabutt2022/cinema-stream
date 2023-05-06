const jwt_app = require('jsonwebtoken')
const bcrypt = require('bcrypt');

function createJWT(user) {
    return jwt_app.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

async function isValidPassword(myPlaintextPassword, hash){
    const match = await bcrypt.compare(myPlaintextPassword, hash);
    console.log('match '+ match)

    return match
}


module.exports = {
    createJWT,
    isValidPassword
}