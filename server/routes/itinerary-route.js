const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel');

router.get('/',
    (req, res) => {
        itineraryModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

router.get('/:cityId',
    (req, res) => {
        let cityRequested = req.params.cityId;
        itineraryModel.find({ cityId: cityRequested })
            .then(itinerary => {
                res.send(itinerary)
            })
            .catch(err => console.log(err));
    });
module.exports = router;