import React from 'react';
import Navbar from './components/navbar/Navbar';
import Bidhistory from './components/bidhistory/Bidhistory';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="body">
    <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/auctions' />
          <Route path='/vendors' />
          <Route path='/contact' />
          </Routes>
    </div>
  );
}
export default App;