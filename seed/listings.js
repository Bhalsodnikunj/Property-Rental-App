const mongoose = require('mongoose');
const Listing = require('../models/Listing');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI=mongodb://127.0.0.1:27017/stayfinder);

const listings = [
  {
    title: 'Beachfront Paradise',
    location: 'Goa',
    price: 3200,
    image: 'https://source.unsplash.com/400x300/?beach,goa',
    description: 'Beautiful beachfront view.',
  },
  {
    title: 'Mountain Retreat',
    location: 'Manali',
    price: 2500,
    image: 'https://source.unsplash.com/400x300/?mountains,manali',
    description: 'Peaceful mountain cabin.',
  },
];

Listing.insertMany(listings)
  .then(() => {
    console.log('Seeded listings!');
    mongoose.disconnect();
  });
