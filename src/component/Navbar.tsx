import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import CreateAccount from './Create Account';
import Store from './Store'; // Import your Store component
 
 
const Navbar: React.FC = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSignInClick = () => {
    setShowCreateAccount(true);
    setShowMediaIcons(false);
    setShowMap(false);
  };

  const handleStoreClick = () => {
    setShowMap(true);
    setShowCreateAccount(false);
  };

  return (
    <>
      <nav className={`main-nav ${showMediaIcons ? 'mobile-menu-open' : ''}`}>
        <div className="logo">
          <h2>
            <span>N</span>
            <span>O</span>
            <span>R</span>
            <span>D</span>
            <span>S</span>
            <span>T</span>
            <span>R</span>
            <span>O</span>
            <span>M</span>
          </h2>
        </div>

        <div className="search-box">
          <div className="search-icon">🔍</div>
          <input type="text" placeholder="         Search the products and brands" />
        </div>

        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
              <a href="#" onClick={handleSignInClick}>
                Sign In
              </a>
            </li>
            <li>
              <Link to="/purchase">Purchase</Link>
            </li>
            <li>
              <a href="#" onClick={handleStoreClick}>
                Store
              </a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://youtube.com/@nordstrom?si=F-yuFKkN6xtEY5w2" target="_blank" rel="noopener noreferrer">
                <FaYoutubeSquare className="Youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Nordstrom/photos" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nordstrom/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className="Instagram" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* Additional Links or Store component */}
      <div className="additional-links">
        {showMap ? <Store /> : (
          <>
            <Link to="/HolidayGift">HolidayGift</Link>
            <Link to="/sale">Sale</Link>
            <Link to="/Men">Men</Link>
            <Link to="/women">women</Link>
            <Link to="/Kids">Kids</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Shoes">Shoes</Link>
            <Link to="/Designer">Designer</Link>
            <Link to="/Activewear">Activewear</Link>
            <Link to="/Beauty">Beauty</Link>
            {/* ... (other links) */}
            <Link to="/explore">Explore</Link>
          </>
        )}
      </div>

    


      {/* Conditionally render CreateAccount component */}
      {showCreateAccount && <CreateAccount />}
      
          
    </>
  );
};

export default Navbar;