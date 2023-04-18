import React from 'react';
import Navbar from './components/navbar/Navbar';
import Bidhistory from './components/bidhistory/Bidhistory';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';

function App() {
  return (
    <div className="body">
       <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/bids' element={<Bidhistory/>} />
        </Routes>
    </div>
  );
}
export default App;
