const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');
const productionHouses = require('./ProductionHouses');
const movies = require('./movies');

router.get('/', Controller.landingPage);
router.use('/productionHouses', productionHouses);
router.use('/movies', movies);

module.exports = router;
