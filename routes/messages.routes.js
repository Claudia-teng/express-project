const express = require('express');
const messagesController = require('../controllers/messages-controller');
const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessage);

module.exports = messagesRouter;