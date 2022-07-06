const mongoose = require('mongoose');

var Plant = mongoose.model('Plant', {
    plantType: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: true
    },
    scientificName:  {
        type: String,
        required: true
    },
    lightRequirements:  {
        type: [String],
        required: true
    },
    soilRequirements: {
        type: [String],
        required: true
    },
    moistureRequirements: {
        type: [String],
        required: true
    },
    summary: {
        type: String,
        required: false
    }
});

module.exports = { Plant };

