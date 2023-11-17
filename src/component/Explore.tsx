// Footer.js

import React from 'react';

const Explore: React.FC = () => {
  return (
    <footer className="footer">
      {/* Customer Service Section */}
      <div className="customer-service-links">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Return Policy & Exchanges</a></li>
          <li><a href="#">Price Adjustments</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Product Recalls</a></li>
        </ul>
      </div>

      {/* Repeat the structure for other sections */}

      {/* About Us Section */}
      <div className="about-links">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">India</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">All Brands</a></li>
          <li><a href="#">Careers</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Stores & Services Section */}
      <div className="stores-services-links">
        <h3>Stores & Services</h3>
        <ul>
          <li><a href="#">Find a Store</a></li>
          <li><a href="#">Free Style Help</a></li>
          <li><a href="#">Alterations & Tailoring</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Nordstrom, Inc. Section */}
      <div className="nordstrom-inc-links">
        <h3>Nordstrom, Inc.</h3>
        <ul>
          <li><a href="#">Nordstrom Rack</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Press Releases</a></li>
          <li><a href="#">Nordstrom Media Network</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Explore;
