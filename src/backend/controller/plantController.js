const express = require('express');
const router = express.Router();

var { PlantsSchema } = require('../models/plant');

router.get('/', (req,res) => {
    PlantsSchema.find((err, docs) => {});
});
