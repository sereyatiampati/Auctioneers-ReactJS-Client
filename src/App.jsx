import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './pages/login/login'
import NotFound from './pages/404/NotFound'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = [loggedIn, setLoggedIn];
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login value={value}/>} />
          <Route path="*" element={<NotFound value={value}/>} />
        </Routes>
    </>
  );
}
export default App;
