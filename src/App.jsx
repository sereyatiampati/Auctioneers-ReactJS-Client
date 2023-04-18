import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}
export default App;
