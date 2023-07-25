import React from "react";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
