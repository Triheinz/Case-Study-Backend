const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    lastName: { type: String },
    address: { type: String },
    country: { type: String },
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

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
