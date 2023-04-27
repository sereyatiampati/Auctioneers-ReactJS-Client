
import React, { useState, useEffect } from 'react';
import './App.css'
import Login from './components/login/login'
import NotFound from './components/404/NotFound'
import BidPage from './components/bidPage/BidPage'
import Seller from './components/seller-page/seller'
import Home from './components/home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Signup from './components/signup/Signup'
import Bidhistory from './components/bidhistory/Bidhistory'
import HomeFooter from './components/home/HomeFooter';
import Vendors from './components/vendors/vendors';
import HomeContact from './components/home/HomeContact';
import Newsletter from './components/home/Newsletter';
import BidderPage from './components/bidderpage/BidderPage';
import CreateProduct from './components/createProduct/CreateProduct';
import { getJwtToken, getJSONPayloadFromJwt } from './utilities/auth';
import Editproduct from './components/Editproduct/Editproduct';

function App() {
  const [user, setUser] = useState(null);

  function syncUserStateWithJWTOnLoad() {
    try {
      const userParams = getJSONPayloadFromJwt(getJwtToken());
      if ('buyer_id' in userParams || 'seller_id' in userParams) {
        setUser(userParams);
      } else {
        /* Catch if jwt is present but the above are not*/
        setUser(null);
      }
    } catch {
      /* Catch where no token exists absolutely */
      setUser(null);
    }
  }

  useEffect(syncUserStateWithJWTOnLoad, []);

  return (
    <div className="body">
        <Navbar user={user} setUser={setUser}/>
        <Routes>

          {/* A guest user routes */}
          <Route path='/signup' element={<Signup setUser={setUser} />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/auctions' element={<BidderPage/>}/>
          <Route path='/vendors' element={<Vendors/>}/>
          <Route path='/product' element={<BidPage/>}/>
          <Route path='/contact' element={
            <>
            <HomeContact/>
            <Newsletter/>
            </>
          }/>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/auction/:id" element={<BidPage />}/>
          {/* Seller routes */}
          <Route path='/seller' element={<Seller user={user}/>}/>
          <Route path='/new-product' element={<CreateProduct user={user}/>}/>
          <Route path='editproduct/:id' element={<Editproduct/>}/>
          {/* Buyer Routes */}
          <Route path='/bids' element={<Bidhistory/>}/>
          <Route path="*" element={<NotFound/>} />

        </Routes>
        <HomeFooter/>
        
    </div>
  );
}
export default App;
