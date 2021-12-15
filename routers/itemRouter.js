const express = require('express');

const router = express.Router();

module.exports = (controller) => {
  router.get('/', controller.get.bind(controller));
  router.post('/', controller.post.bind(controller))
  router.put('/', controller.sample.bind(controller))
  router.post('/insert', controller.insertOne.bind(controller))
  router.get('/all', controller.getAll.bind(controller))
  router.post('/findById', controller.getByUserId.bind(controller))
  return router;
};