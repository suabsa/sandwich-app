'use strict';

const sendTask = require('./rabbit-utils/sendTask.js')
const receiveTask = require('./rabbit-utils/receiveTask.js')
const STATUS_RECEIVED_ORDER = 'received-orders';
const STATUS_ORDER_COMPLETE = 'order-complete';

console.log('server B starts..');
const sendingReplyServerB = function (msgBody) {
    //setting up confirmation message. Adds to queue
    sendTask.addTask(process.env.MESSAGE_QUEUE, STATUS_ORDER_COMPLETE, msgBody);
};

receiveTask.getTask(process.env.MESSAGE_QUEUE, STATUS_RECEIVED_ORDER, sendingReplyServerB);
