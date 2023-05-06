const express = require('express');
const esnureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');

router.get('/', esnureLoggedIn, moviesCtrl.getMovies);

router.get('/price', esnureLoggedIn, moviesCtrl.getPrice);

router.get('/getTickets', esnureLoggedIn, moviesCtrl.getTickets);

router.post('/ticket', esnureLoggedIn, moviesCtrl.submitTicket);

router.delete('/deleteTicket/:id', esnureLoggedIn, moviesCtrl.deleteTicket);

module.exports = router