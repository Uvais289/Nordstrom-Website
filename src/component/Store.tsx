import React, { useState } from 'react';

const Store: React.FC = () => {
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const handleSearch = () => {
    // You can implement the logic to convert the zip code to coordinates here
    // For simplicity, let's assume a placeholder function getCoordinatesFromZipCode
    const coordinates = getCoordinatesFromZipCode(zipCode);

    // Constructing the Google Maps URL
    const mapUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=10`;

    // Redirect the user to the map URL
    window.location.href = mapUrl;
  };

  const getCoordinatesFromZipCode = (_zipCode: string) => {
    // In a real application, you would use a geocoding service to get the coordinates
    // This is a placeholder function
    return { lat: 40.7128, lng: -74.0060 }; // Coordinates for New York City
  };

  return (
    <div className="main-container">
      <h2>Store</h2>
      <div className="zip-code-container">
        <label>
          Enter your ZIP code:
          <input type="text" value={zipCode} onChange={handleZipCodeChange} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="store-container">
        <iframe
          title="World Map"
          className="store-map"
          width="800"
          height="600"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39642284.26303269!2d-113.8901586105768!3d37.59268281753912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c5da4b4f62a1%3A0x3fc2846b65e07a90!2sWorld!5e0!3m2!1sen!2sus!4v1665236963227!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Store;
