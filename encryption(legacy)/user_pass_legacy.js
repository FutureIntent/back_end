const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

function encrypt(pass) {

    var mykey = crypto.createCipher('aes-128-cbc', process.env.encryption_key);
    var mystr = mykey.update(pass, 'utf8', 'hex')
    return mystr += mykey.final('hex');

}

function decrypt(pass) {

    var mykey = crypto.createDecipher('aes-128-cbc', process.env.encryption_key);
    var mystr = mykey.update(pass, 'hex', 'utf8')
    return mystr += mykey.final('utf8');

}

module.exports = { encrypt, decrypt };



