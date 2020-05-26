const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/order', async(req, res) => {
    console.log('order post')
    const order = new Order({
        title: req.body.title,
        description: req.body.description,
        amount: req.body.amount,
        date: req.body.date
    });

    Order.create(order, (err) => {
        if(err) console.log(err)
        else {
            console.log("Inserted Item")
        }
    })
    res.redirect('/order')
});

module.exports = router;