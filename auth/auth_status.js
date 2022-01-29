const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const loginStatus = (req, res) => {
    const token = req.cookies['token'];

    if (!token) {
        res.json({ status: false, isAdmin: false, message:"No authorisation token"});
    } else {
        jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
            if (err) {
                res.json({ status: false, isAdmin: false, message: "auth fail" })
            } else if (!decoded.isAdmin) {
                res.json({ status: true, isAdmin: false, message: "user" });
            } else {
                res.json({status:true, isAdmin:true, message:"admin"});
            }
        });
    }



}
module.exports = loginStatus;