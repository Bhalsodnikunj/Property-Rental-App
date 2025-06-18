const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const listingRoutes = require('./routes/listings');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/propertyApp');

app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/listings', listingRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
