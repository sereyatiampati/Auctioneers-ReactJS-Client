import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="body">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
