// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import SignIn from './component/SignIn';
import CreateAccount from './component/Create Account';
import Store from './component/Store';
import Women from './component/Women';
import Men from './component/Men';
import Beauty from './component/Beauty';
import Shoes from './component/Shoes';
import Kids from './component/Kids';
import HolidayGift from './component/Holiday Gift';
import Activewear from './component/Activewear';
import Explore from './component/Explore';
import Home from './component/Home';
import Purchase from './component/Purchase';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Beauty" element={<Beauty />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/HolidayGift" element={<HolidayGift />} />
        <Route path="/Activewear" element={<Activewear />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Purchase" element={<Purchase />} />

        {/* Add a dynamic route for Home component */}
        <Route path="/:category?" element={<Home />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
