import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';
import Bidderpage from './pages/Bidderpage/Bidderpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bidderpage/>
      <Footer />
    </div>
  );
}
export default App;
