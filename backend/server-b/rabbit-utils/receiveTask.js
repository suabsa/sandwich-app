#!/usr/bin/env node
// Process tasks from the work queue
// in our case an order for a sandwich

'use strict';

var amqp = require('amqplib');


module.exports.getTask = function (rabbitHost, queueName, sendingReplyServerB) {
    amqp.connect('amqp://' + rabbitHost).then(function (conn) {
        process.once('SIGINT', function () {
            conn.close();
        });
        return conn.createChannel().then(function (ch) {
                var ok = ch.assertQueue(queueName, {durable: true});
            ok = ok.then(function () {
                ch.prefetch(1);
            });
            ok = ok.then(function () {
                ch.consume(queueName, doWork, {noAck: false});
                console.log(new Date(), " [*] Waiting for messages. To exit press CTRL+C");
            });
            return ok;

            function doWork(msg) {
                var body = msg.content.toString();
                console.log(" [x] Received order: '%s'", body);
                let orderInfo = JSON.parse(msg.content);

                //Setting up the status of order. At this point there shouldn't be any errors
                orderInfo.status = "ready";
                console.log(" [x] Re-adding into queue with status: '%s' after 10 seconds", orderInfo.status);
                setTimeout(function () {
                    console.log(new Date(), " [x] Done");
                    ch.ack(msg);
                    //Sending reply to the message received
                    sendingReplyServerB(orderInfo);
                }, 10000);
            }
        });
    }).catch(console.warn);
}
