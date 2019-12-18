const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');



//auth user and login user
router.post("/", (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;

    //Simple validation
    if (!username || !password) { //validation email and password
        return res.status(400).json({ msg: "Please enter all fields" });
    }
    // Check for existing user
    User.findOne({ username })
        .then(user => {
            console.log(user);
            if (!user) return res.status(400).json({ msg: "user does not exist." });

            //validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid login' });

                    jwt.sign(
                        { id: user._id }, //jwt payload
                        config.get('jwtSecret'),
                        { expiresIn: "24h" },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    username: user.username,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        });
});





module.exports = router;