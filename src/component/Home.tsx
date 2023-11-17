// Home.tsx
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Implement your logic to handle the email subscription
    console.log(`Subscribed email: ${email}`);
    // You may want to send the email to a server or update your state accordingly
    // Reset the email state after subscription if needed: setEmail('');
  };

  return (
    <div className='gift '>
      {/* Images at the top */}
      <div>
        <img src="https://n.nordstrommedia.com/it/f4a6788e-7295-403f-b4dd-d46fdc3e7ebe.jpeg?h=390&w=1334" alt="Image 1" />
       
        {/* Add more images as needed */}
      </div>

        <div className='Gifts for home'>
      <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQgySYBTGMaMFhy8O22ACU_7qmfSniY42-_jPZfyYWqyhoZzJ-l8fMWiN8HzS_SuIGe2id4rYUgR0fZQVvwn-tuVfD89H_1zavWdBs9mDKN2G-PYM9awTU1&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Table Clock">Table clock</h3>
    <p className="INR">INR 699 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>


  <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKWeN_Q02LYZhu3sYoGxNfPjp3NQ9c5DZceEKy5MSZhCo4vE6UgVquBC_d9YwyNebQk4fxmgX8fcBZ74TMU_jpdKo-wKDxLuViu4SACiceoCZNjHp-vIZpQw&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Fuel Pizza oven">Fule pizza Oven</h3>
    <p className="INR">INR 34,499 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQW0dr0Vt1tSgTRUl7oyWNbzIwM46NJQaC9Vn2eD2GwyeNsJ5YsyV_IY6iCdBB0tWcZOYPvG1jgMzXZyZiUujB2QF2EzV1vIt4CVLMj03KMT8c7nJ5cX7jbyg&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Stanley Bottle">Stanley</h3>
    <p className="INR">INR 4,0699 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMItHyTdtlI-TZr0BaJQRIhicY3khxOLtmirCJhhBV2DMGlUJRyOHuC-XtfaO6EQdvHymaF8293tJ2Fv2JrBeaaeLa6KaC&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="	Christmas Pine Tree ">	Christmas Pine Tree </h3>
    <p className="INR">INR 4,499 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9otZUzudZ2OaByfhc4Wc3sH2s6pCtoR6Pezz6hKSq&s" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Initial Square Zip Travel Case">Initial Square Zip Travel Case</h3>
    <p className="INR">INR 1796 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJBk_aN91CtCaFr27hDmDUyvO0KbvlhzsVEJ17ItoIO86cszd5Jssirm1rRsI4VswXKqYMgZemkqkokBlHRebkC3KLpoyngIvNw47LmuSd&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="	3 - Wick Soy Wax Jar Candle">   3 - Wick Soy Wax Jar Candle</h3>
    <p className="INR">INR 649 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYwZ7B5cIam5NlIxOFkQduGeNORSKVhxXjP39T63V0YGM1szXB9O4ZMP7Xy-wPKvbiB5E-rC2ubJM053x9eo90yBJsm_OU6MWjxJzOSW4LUQatYThmq8kn&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="he Carry-On Rollern">he Carry-On Roller</h3>
    <p className="INR">INR 20,650 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS5fLwDYr7lmCRUR9n9u-kx-TtTBTdT33V5HBzVoH-bLSdquE7fNm8G9dXngXv8cqBBM4uCKauVMhH-JSuXteQz2JN4D-fif_VpPhPbQMk&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="	Stanley Aerolight Transit Bottle Pool ">Stanley Aerolight Transit Bottle Pool </h3>
    <p className="INR">INR 3,499 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="data:image/jpeg;base64,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" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Wall Phone Call">Wall Phone Call</h3>
    <p className="INR">INR 34,499 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiYkc44gQOAclrSxYxCddh-mGFs2KhEgyDf05uxUVb7_sg03Ok880z-MyT5sqHQ6xwOHYiXiSn8sbpxeVRAxCMOLjb1xdmBZ0ED4ftXGo&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Combo for men">Combo for men</h3>
    <p className="INR">INR 899 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwxoDNG69Ff2MqxxxBB_AtX__AzYaR1c0D5vu0B2D2_ZlwIV_LJWHSmmUsU78kdckxA4vygI5Lqe-6Qwr_ca-7qNcYHefwPn4FBMjeVDI&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="coockware">Coockware</h3>
    <p className="INR">INR 4,988 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>

  <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgotad6ub8TD6XMtBzX3cnU_t-vS-hzDNvezKNkAniuvngEHSIXjeNTV12UDztAp3HZuFywCYhdkkohIXS2C7Eb63xMR4jBHwOyyLEpCIv&usqp=CAE" alt="Product Image" className="product-image" />
  <div className="product-details">
    <h3 className="Wine glasses">Wine glasses</h3>
    <p className="INR">INR 2699 Current Price</p>
    <button className="buy-button"> Buy Now </button>
  </div>


  </div>

      {/* Email Subscription Box */}
      <div className="email-subscription">
        <h2>Get Email Updates</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button onClick={handleSubscribe}>Sign up</button>
      </div>
    </div>
  );
};

export default Home;
