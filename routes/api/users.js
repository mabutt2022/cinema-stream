const express = require('express');
const esnureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.put('/change-password', esnureLoggedIn, usersCtrl.changePassword);
router.post('/update-user', esnureLoggedIn, usersCtrl.updateUserInfo);

// Auth Required
router.get('/check-token', esnureLoggedIn, usersCtrl.checkToken);
router.get('/profile', esnureLoggedIn, usersCtrl.getUserProfile);

module.exports = router
