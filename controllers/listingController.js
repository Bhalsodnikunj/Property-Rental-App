const Listing = require('../models/Listing');

exports.getListings = async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
};

exports.getListingById = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
};

exports.createListing = async (req, res) => {
  const listing = new Listing(req.body);
  await listing.save();
  res.status(201).json(listing);
};
