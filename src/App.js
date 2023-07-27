import React from "react";
import Home from './pages/Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
