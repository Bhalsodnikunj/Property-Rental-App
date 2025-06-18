const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { user, listing, startDate, endDate } = req.body;
  const booking = new Booking({ user, listing, startDate, endDate });
  await booking.save();
  res.status(201).json(booking);
};
