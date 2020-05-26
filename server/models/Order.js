const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Orders', OrderSchema)