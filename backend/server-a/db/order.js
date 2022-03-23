const mongoose = require('mongoose');

const server = 'db:27017';
const database = 'order';

mongoose.connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

const orderSchema = new mongoose.Schema({
  sandwichId: Number,
  orderId: Number,
  status: String
});

module.exports = mongoose.model('Order', orderSchema);