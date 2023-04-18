import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Bidhistory from './components/bidhistory/Bidhistory';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bidhistory />
      <Footer />
    </div>
  );
}
export default App;
