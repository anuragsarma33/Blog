const express = require('express');
const appRoute = express.Router();
const appControl = require('../controller/blog.controller');

appRoute.get('/', appControl.index);
appRoute.get('/create', appControl.create);
appRoute.post('/create', appControl.viewPost);
appRoute.get('/edit/:id', appControl.editPost);
appRoute.post('/edit/:id', appControl.updatePost);
appRoute.get('/delete/:id', appControl.deletePost);

module.exports = appRoute;