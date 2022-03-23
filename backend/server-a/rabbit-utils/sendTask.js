#!/usr/bin/env node
// Post a new task to the work queue
// in our case an order for a sandwich

'use strict';

var amqp = require('amqplib');
var Order = require('../service/OrderService');

module.exports.addTask = function (rabbitHost, queueName, order) {
    amqp.connect('amqp://' + rabbitHost)
        .then(function (c) {
            c.createConfirmChannel()
                .then(function (ch) {
                    //when not exist, create queue
                    ch.assertQueue(queueName, {durable: true});
                    ch.sendToQueue(queueName, new Buffer.from(JSON.stringify(order)), {},

                        function (err, ok) {
                            console.log("found order from JSON to RabbitMQ");

                            var status = 'inQueue';
                            if (err !== null) {
                                console.warn(new Date(), 'Message nacked!');
                                status = "failed";
                            } else {
                                console.log(new Date(), 'Message acked');
                            }

                            // Contains current status based on whether it's failed or inQueue.
                            Order.updateOrder(order.id, {status: status})
                                .then(function (response) {
                                    console.log("Order updated", response);
                                }).catch(function (error) {
                                console.log("Order update failed", error);
                            });
                        });
                });
        }).catch((err) => {
        console.log(err, 'promise error');
    });
}
