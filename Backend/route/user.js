const path = require('path');
const auth = require('../Middleware/Auth');

const express = require('express');

const router = express.Router();

const userController = require('../Controller/user');


router.post('/', userController.addUser);

router.get('/', userController.getUser);

router.get('/transaction/:page', userController.getTransaction);

router.get('/transaction', userController.getTransactions);

module.exports = router;