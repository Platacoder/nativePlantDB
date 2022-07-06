const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Plant } = require('../models/plant');


// => localhost:8000/plants
router.get('/', (req, res) => {
    Plant.find((err, docs) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log('Error in Retrieving Plants :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No plantwith given id : ${req.params.id}`);
    }

    Plant.findById(req.params.id, (err, doc) => {
        if(!err) {
            res.send(docs);
        } else {
            console.log('Error in Retrieving Plant :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    var plant = new Plant({
        plantType: req.body.plantType,
        commonName: req.body.commonName,
        scientificName: req.body.scientificName,
        lightRequirements: req.body.scientificName,
        soilRequirements: req.body.soilRequirements,
        moistureRequirements: req.body.moistureRequirements,
        summary: req.body.summary
    });
    plant.save((err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Adding new Plant :' + JSON.stringify(err, undefine, 2)); }
    });
});

module.exports = router;
