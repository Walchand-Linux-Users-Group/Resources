const express = require('express');
const router = express.Router();


const { createUser, deleteUser, login, signUp } = require('../controllers/userControllers');

// router.post('/createUser', createUser);
router.post('/login', login);
router.post('/signup', signUp);
router.delete('/deleteUser', deleteUser);

module.exports = router;
