const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


router.get('/test', (req, res) => {
    res.send({ msg: 'users test route.' });
});

//add new user
router.post("/", (req, res) => {
    console.log(req.body)
    const newUser = new userModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    userModel.findOne({ username: req.body.username }).then(files => {
        console.log(files);
        if (files) { //validation username
            res.send({ message: "This username already exists!" });

        } else {
            userModel.findOne({ email: req.body.email }).then(user => {
                console.log(user);
                if (user) { //validation email
                    res.send({ message: "This email already exists!" });

                } else { //send newUser to database

                    //Create Salt & Hash
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {

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
                        })
                    })
                }
            });
        }
    });


})


module.exports = router;