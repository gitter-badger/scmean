'use strict';

var express = require('express');
var controller = require('./repository.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', auth.isAuthenticated(), controller.create);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;