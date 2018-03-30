'use strict';

const router = require('express').Router();
const con = require('../controllers/controller');

router.get('/', con.helloWorld)

module.exports = router;
