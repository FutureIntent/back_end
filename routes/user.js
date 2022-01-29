const express = require('express');
const router = express.Router();
const User = require('./../models/User_model.js');
const user_val = require('./../validation/user_validation.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const isAdmin = require('./../auth/admin_auth.js');
const isAuthorised = require('./../auth/user_auth.js');
const loginStatus = require('./../auth/auth_status.js');
const reg_emailer = require('./../emailer/registration.js');
const { Op } = require("sequelize");

//REGISTRATION ROUTE
router.post('/register', async (req, res) => {

    //VALIDATE REGISTER BODY
    const { error } = await user_val.register_schema.validate(req.body);

    if (error) return res.json({ status: false, message: error.details[0].message });

    //CHECK IF EMAIL ALREADY REGISTERED
    const findEmail = await User.findOne({
        where: {
        email: req.body.email
        }
    })

    if (findEmail) return res.status(400).json({ status: false, message: "Email already registered"});

    //PASSWORD HASHING
    const hash = await bcrypt.hash(req.body.password, 10);

    //REGISTER USER
   await User.create({
       email: req.body.email,
       name: req.body.name,
       password: hash
    })
       .then(data => res.status(200).json({ status: true, message: "Verification link has been sent to the new users email" }))
       .catch(err => res.status(400).json({ status: false, message: err }))

    newUser = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    reg_emailer(newUser.email, `http://localhost:3000/verify?id=${newUser.id}&email=${newUser.email}`);

});

//SHOW ALL USERS
router.get('/show', async (req, res)=> {
    const users = await User.findAll();
    res.send(users);
});

//SHOW USER PROFILE
router.get('/profile', isAuthorised, async (req, res) => {

    //GET ID FROM TOKEN
    const token = req.cookies['token'];
    const decoded = jwt.decode(token);
    const user_id = decoded.id;

    //FIND USER
    const user = await User.findOne({
        where: {
            id: user_id
        }
    });

    //IF NO USER
    if (!user) return res.json({ status: false, message: "User does not exist" });

    //IF EXISTS
    res.json({
        status: true, data: {
            email: user.email,
            name: user.name,
            avatar: user.avatar,
            info: user.info
        }
    });

});

//USER UPDATE
router.patch('/update', isAuthorised, async (req, res) => {

    //VALIDATE UPDATE BODY
    const { error } = await user_val.update_schema.validate(req.body);

    if (error) return res.json({ status: false, message: error.details[0].message});

    //GET ID FROM TOKEN
    const token = req.cookies['token'];
    const decoded = jwt.decode(token);
    const user_id = decoded.id;

    //FIND USER
    const user = await User.findOne({
        where: {
            id: user_id
        }
    });

    //IF NO USER
    if (!user) return res.json({ status: false, message: "User does not exist" });

    //EMPTY AVATAR VALUE
    if (req.body.avatar == "") {
        req.body.avatar = 'https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg';
    }

    //UPDATE USER
    User.update({
        name: req.body.name,
        info: req.body.info,
        avatar: req.body.avatar
    },
        {
            where: {
                id: user_id
            }
        }
    )
        .then(data => res.json({ status: true, message: "User updated"}))
        .catch(err => res.json({ status: false, message: "Update error"}))
});

//DELETE USER
router.delete('/delete/:id', async(req, res) => {

    //CHECK IF USER EXISTS
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!user) return res.send("User doesnt exist");

    //USER DELETION
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => res.send("User deleted"))
        .catch(err => res.send("Deletion error"))
});

//LOGIN ROUTE
router.post('/login', async (req, res) => {

    //VALIDATE LOGIN BODY
    const { error } = await user_val.login_schema.validate(req.body);

    if (error) return res.json({ status: false, message:error.details[0].message });

    //CHECK IF USER REGISTERED
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user) return res.json({ status: false, message: "Email or password is invalid" });

    //CHECK IF VERIFIED
    if (!user.active) return res.json({ status: false, message: "User is not verified" });

    //COMPARE HASHED PASSWORDS
    const verified = await bcrypt.compare(req.body.password, user.password);

    if (!verified) return res.json({ status:false , message: "Email or password is invalid"});

    //CHECK IF USER IS BLACKLISTED
    if (user.blackListed) return res.json({ status: false, message: "User is blacklisted" });

    //CHECK IF USER IS VERIFIED
    if (!user.active) return res.json({status: false, message: "Email is not verified"});

    //CREATE JWT
    const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, process.env.jwt_secret, { expiresIn: 5 * 60 });

    //return res.json({auth: true, token: token, result: user});

    res.cookie('token', token, { maxAge: 60 * 60 * 1000 }); //cookie expires in 1 hour

    return res.json({ status:true, isAdmin: user.isAdmin, message: "Successful Log In"});

});

//LOGOUT ROUTE
router.post('/logout',(req, res) => {

    res.clearCookie('token');

    return res.json({status: true, isAdmin: false, message: "Logged out"});
});

router.post('/loginStatus', loginStatus);

//user authorisation test
router.get('/auth', isAuthorised, (req, res) => {
    res.json({ status: true, message: "User authorised" });
});

//admin authorisation test
router.get('/admin', isAdmin, (req, res) => {
    res.json({status: true, message: "Admin authorised"});
});

//EMAIL TEST
router.post('/email', (req, res) => {

    //EMAIL DATA
    const email = 'IamSoulfuller@gmail.com';
    const text = 'Email is sent!';

    //SEND EMAIL
    reg_emailer(email,text);
});

//VERIFY USER
router.put('/verify', async (req, res) => {

    //QUERY DATA
    const id = req.query.id;
    const email = req.query.email;

    //CHECK IF USER EXISTS
    const new_user = await User.findOne({
        where: {
            [Op.and]: [
                { id: id },
                { email: email }
            ]
        }
    });

    if (!new_user) return res.json({status: "false", message: "No such user"})

    //UPDATE USERS STATUS
    User.update({ active: true }, {
        where: {
            [Op.and]: [
                { id: id },
                { email: email }
            ]
        }
    }
    )
    .then(data => res.json({ status: "true", message: "Account verified" }))
    .catch(err => res.json({ status: "false", message: "Error verifying user" }))
    
});

module.exports = router;