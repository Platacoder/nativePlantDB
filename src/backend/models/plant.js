const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlantsSchema = new Schema({
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

module.exports = PlantsSchema;

