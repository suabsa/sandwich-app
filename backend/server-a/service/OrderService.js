'use strict';

const Order = require('../db/order');

/**
 * Add an order for an sandwich
 *
 * order Order place an order for a sandwich
 * returns Order
 **/
exports.addOrder = function(order) {

  return new Promise(function(resolve, reject) {

    if (Object.keys(order).length > 0) {
      const orderDoc = new Order({
        sandwichId: order.sandwichId,
        orderId: order.id,
        status: order.status
      });
      
      orderDoc.save()
        .then(savedOrder => {
          resolve(savedOrder);
        }).catch(err => {
          console.log('save error: ' + err)
          reject();
        })
      
    } else {
      resolve();
    }

  });

}


/**
 * Find an order by its ID
 * IDs must be positive integers
 *
 * orderId Long ID of the order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(orderId) {
  return new Promise(function(resolve, reject) {
    
    Order.find({orderId}).then(foundOrder => {
      resolve(foundOrder);
    }).catch(err => {
      console.log('find error: ' + err)
      reject();
    })
    
  });
}


/**
 * Get a list of all orders. Empty array if no orders are found.
 *
 * returns ArrayOfOrders
 **/
exports.getOrders = function() {

  return new Promise(function(resolve, reject) {

    Order.find({}).then(foundOrders => {
      resolve(foundOrders);
    }).catch(err => {
      console.log('find error: ' + err)
      reject();
    })
    
  });

}

/**
 * Update an order
 *
 * Order of orderId will be updated
 * new data will be in the 'body' parameter
 **/
exports.updateOrder = function (orderId, body) {
  console.log('update order from server A');
  return new Promise(function (resolve, reject) {
    Order.findOneAndUpdate({orderId}, body, {new: true}, function (err, order) {
      if (err) {
        reject(err);
        return;
      }
      console.log(order);
      resolve(body);
    })
  });
};

