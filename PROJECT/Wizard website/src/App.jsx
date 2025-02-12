import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Main /> 
      <Footer/> 
     
    </div>
  );
}

export default App;