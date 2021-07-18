const express = require('express');
const Order = require('../models/Order.model');
const router = express.Router();

router.get('/', (req, res, next) => {
  Order.find({ order: req.order.id })
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  order.findOne({ _id: id, order: req.order.id })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json(err));
});

router.post('/', async (req, res, next) => {
  const { name, description, dueDate, priority } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  try {
    const order = await order.create({
      name,
      description,
      dueDate,
      priority,
      order: req.order.id,
    });
    // const order = await order.findOneAndUpdate({ _id: req.id}, {$push: {orders: order.id }}, {new: true});
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }

  // .then(order => res.status(200).json(order))
  // .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  order.findOneAndUpdate({ _id: id, order: req.order.id }, req.body, { new: true })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  order.findOneAndRemove({ _id: id, order: req.order.id })
    .then(() => res.status(200).json({ message: `order ${id} deleted 🗑` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
