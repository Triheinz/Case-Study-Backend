const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    date: { type: String },
    clientName: { type: Schema.Types.ObjectId, ref: 'Client' },
    products: [{ type: String }],
    orderState: {
      type: String,
      enum: ['Requested', 'Processing', 'Delivered'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;

        return ret;
      },
    },
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
