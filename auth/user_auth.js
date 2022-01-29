const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const isAuthorised = (req,res,next) => {
    //const token = req.headers["x-access-tokken"];
    const token = req.cookies['token'];
    console.log("JWToken: " + token);

    if (!token) {
        res.json({ status: false, message: "No authorisation token" });
    } else {
        jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
            if (err) {
                res.json({ status: false, message: "Auth fail" })
            } else {
                next();
            }
        });
    }

}
module.exports = isAuthorised;
