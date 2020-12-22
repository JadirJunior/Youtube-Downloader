const express = require('express');
const routes = express.Router();
const ytdl = require('./ytdl');

routes.get('/', ytdl.getVideo);

module.exports = routes;