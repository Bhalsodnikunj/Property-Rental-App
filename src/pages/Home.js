// src/pages/Home.jsx

import React, { useState } from 'react';
import listingsData from '../listingsData';
import PropertyCard from '../pages/PropertyCard';
import './home.css';
import Footer from '../Footer'; // ✅ correct relative path inside src


const Home = () => {
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Extract unique locations for filter dropdown
  const uniqueLocations = [...new Set(listingsData.map(listing => listing.location))];

  // Filter logic
  const filteredListings = listingsData.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = locationFilter ? listing.location === locationFilter : true;
    const matchesPrice = maxPrice ? listing.price <= parseInt(maxPrice) : true;
    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <div className="home-container">
      <h1 className="home-title">Find Your Perfect Stay</h1>

      <div className="filters-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="filter-input"
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Max Price (₹)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="property-list">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p className="no-results">No listings match your criteria.</p>
        )}


        <Footer />
      </div>
    </div>
    
  );
};

export default Home;
