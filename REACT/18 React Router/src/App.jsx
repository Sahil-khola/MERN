import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import ABOUT from "./ABOUT.JSX"
import Contact from "./Contact"
function App() {

  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<ABOUT/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='*' element={<div>#Eroor404</div>}></Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
