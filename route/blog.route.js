const express = require('express');
const appRoute = express.Router();
const appControl = require('../controller/blog.controller');

appRoute.get('/', appControl.index);
appRoute.get('/create', appControl.create);
appRoute.post('/create', appControl.viewPost);

module.exports = appRoute;