const express = require('express');
const Order = require('../models/Order.model');
const router = express.Router();

router.get('/', (req, res, next) => {
  Order.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Order.findOne({ _id: id})
    .then((Order) => res.status(200).json(Order))
    .catch((err) => res.status(500).json(err));
});

router.post('/createOrder', (req, res, next) => {
  const { number, date, clientName, products, orderState, country} = req.body;

  Order.create({
      number,
      date,
      clientName,
      products,
      orderState,
      country,

    })
    .then((Order) => res.status(200).json(Order))
    .catch((err) => res.status(500).json(err));

});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  Order.findOneAndUpdate({ _id: id}, req.body, { new: true })
    .then((Order) => res.status(200).json(Order))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Order.findOneAndRemove({ _id: id})
    .then(() => res.status(200).json({ message: `order ${id} deleted 🗑` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
