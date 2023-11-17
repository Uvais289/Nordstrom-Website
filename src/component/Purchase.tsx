import React, { useState } from 'react';

const Purchase: React.FC = () => {
  
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    setIsPurchased(true); // Update isPurchased state to true
  };

  return (
    <div className="container">
      {!isPurchased ? (
        <div>
          <button onClick={handlePurchase} disabled={isPurchased}>
            Purchase
          </button>
        </div>
      ) : (
        <div className="purchased">
          <p>Track and manage orders!</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ia3W658qDeyQ86hhBhEnGEwx-R594bOR1Q&usqp=CAU" alt="Image" />
          <p>Track packages, start a return, report order issues, cancel items or request a price adjustment.</p>
        </div>
      )}
    </div>
  );
};

export default Purchase;
