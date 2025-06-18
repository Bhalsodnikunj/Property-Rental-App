const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// Create new listing
router.post('/', async (req, res) => {
  try {
    const { title, location, price, image, description, owner } = req.body;

    if (!title || !location || !price || !image || !description || !owner) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const listing = new Listing({ title, location, price, image, description, owner });
    await listing.save();

    res.status(201).json({ message: 'Listing created', listing });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
