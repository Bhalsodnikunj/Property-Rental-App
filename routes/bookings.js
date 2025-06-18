const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const { listingId, userId, startDate, endDate } = req.body;

    if (!listingId || !userId || !startDate || !endDate) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newBooking = new Booking({ listingId, userId, startDate, endDate });
    await newBooking.save();

    res.status(201).json({ message: 'Booking confirmed', booking: newBooking });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed', error: err.message });
  }
});

module.exports = router;
