import { useState }, React from 'react'

import './App.css'
import Login from './pages/login/login'
import NotFound from './pages/404/NotFound'
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = [loggedIn, setLoggedIn];
  return (
    <div className="body">
        <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/auctions' />
          <Route path='/vendors' />
          <Route path='/contact' />
          <Route path="/login" element={<Login value={value}/>} />
          <Route path="*" element={<NotFound value={value}/>} />
        </Routes>
    </div>
  );
}
export default App;
