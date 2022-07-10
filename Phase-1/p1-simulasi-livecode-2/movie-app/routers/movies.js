const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.showMovies);
router.get('/add', Controller.addMovies);
router.post('/add', Controller.addMoviesSubmit);
router.get('/delete/:id', Controller.deleteMovies);
router.get('/edit/:id', Controller.editMovies);
router.post('/edit/:id', Controller.saveEditMovie);

module.exports = router;
