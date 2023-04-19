
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt");

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });        
      }
    });
  }, []);

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
        </Routes>
    </div>
  );
}
export default App;