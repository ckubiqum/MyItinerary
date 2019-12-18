const express = require('express');
const router = express.Router();
const activityModel = require('../model/activityModel');

router.get('/',
    (req, res) => {
        activityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

router.get('/:itineraryId',
    (req, res) => {
        let itineraryRequested = req.params.itineraryId;
        activityModel.find({ itineraryId: itineraryRequested })
            .then(activity => {
                res.send(activity)
            })
            .catch(err => console.log(err));
    });
module.exports = router;