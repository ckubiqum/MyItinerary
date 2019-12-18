const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },

    cityId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    hashtags: {
        type: Array,
        required: true
    },
})

module.exports = mongoose.model('itinerary', itinerarySchema)