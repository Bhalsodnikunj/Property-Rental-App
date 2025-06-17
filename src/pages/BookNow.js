import { useState } from 'react';
import axios from 'axios';

const BookNow = ({ token, listingId }) => {
  const [date, setDate] = useState('');

  const handleBooking = async () => {
    const res = await axios.post(
      'http://localhost:5000/api/bookings',
      { listingId, date },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert('Booking confirmed!');
  };

  return (
    <div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookNow;
