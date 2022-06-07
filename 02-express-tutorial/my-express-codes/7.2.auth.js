const express = require('express');
const router = express.Router();

const {
    authorizePeople
} = require('./7.3.controllers');


//Login
router.post('/', authorizePeople);

module.exports = router;