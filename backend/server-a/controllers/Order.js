'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');

//status messages
const STATUS_RECEIVED_ORDER = 'received-orders';
const STATUS_ORDER_COMPLETE = 'order-complete';

var sendTask = require('../rabbit-utils/sendTask.js')
var receiveTask = require('../rabbit-utils/receiveTask.js')

module.exports.addOrder = function addOrder (req, res, next) {
  var order = req.swagger.params['order'].value;
  Order.addOrder(order)
    .then(function (response) {
      utils.writeJson(res, response);

      //Rabbitmq addTask After order made
      sendTask.addTask(process.env.MESSAGE_QUEUE, STATUS_RECEIVED_ORDER, order);
      receiveTask.getTask(process.env.MESSAGE_QUEUE, STATUS_ORDER_COMPLETE);

    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  Order.getOrderById(orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrders = function getOrders (req, res, next) {
  Order.getOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
