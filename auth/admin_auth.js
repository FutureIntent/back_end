const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const isAdmin = (req, res, next) => {
    const token = req.cookies['token'];

    if (!token) {
        res.json({ status: false, message: "No authorisation token" });
    } else {
        jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
            if (err) {
                res.json({ status: false, message: "Auth fail" })
            } else if (!decoded.isAdmin) {
                res.json({status: false, message: "No admin permission"});
            } else {
                next();
            }
        });
    }

    

}
module.exports = isAdmin;
