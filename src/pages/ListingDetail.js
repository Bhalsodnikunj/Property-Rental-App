import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import listingsData from '../listingsData';
import './detail.css';



const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const selectedListing = listingsData.find(item => item.id === parseInt(id));
    setListing(selectedListing);
  }, [id]);

  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBookNow = () => setShowForm(true);

  const handleConfirmBooking = () => {
    if (!startDate || !endDate) {
      alert('Please select both dates.');
      return;
    }
    alert(`Booking confirmed for ${listing.title} from ${startDate} to ${endDate}`);
    setShowForm(false);
  };

  if (!listing) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <img src={listing.image} alt={listing.title} className="detail-image" />
      <div className="detail-content">
        <h1>{listing.title}</h1>
        <p className="location">{listing.location}</p>
        <p className="price">₹{listing.price}/night</p>
        <p className="description">{listing.description}</p>

        <button className="book-btn" onClick={handleBookNow}>Book Now</button>
        

        {showForm && (
          <div className="booking-form">
            <h3>Enter Booking Dates</h3>
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
            <button className="confirm-btn" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingDetail;
