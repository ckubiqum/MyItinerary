const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');



/*get all cities*/
router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

//add new city
router.post("/", (req, res) => {
    const newCity = new cityModel({
        city: req.body.city,
        country: req.body.country
    });
    cityModel.findOne({ city: req.body.city }).then(files => {
        console.log(files);
        if (files) {
            res.send({ message: "city exists!" });

        } else {
            newCity.save().then(city => {
                res.send(city);
            });
        }
    });
})
module.exports = router;
