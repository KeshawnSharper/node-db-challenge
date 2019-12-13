const express = require('express');

const projectRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use('/api', projectRouter);

module.exports = server;