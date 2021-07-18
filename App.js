require('dotenv').config();
const express = require('express');

// DB config
require('./configs/db.config');

const app = express();
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

const orderRouter = require('./routes/order.routes');
app.use('/api/orders', orderRouter);

app.use((req, res, next) => {
  return res.status(404).json({ message: "Not found"});
})

module.exports = app;
