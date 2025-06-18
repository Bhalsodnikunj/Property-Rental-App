const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
