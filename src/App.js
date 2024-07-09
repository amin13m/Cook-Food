import React, { useState } from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import "./App.css";

import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";
import Navbar from "./Components/Navbar";

function App() {
  

  return (
   <>
   <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/Recipe/:id" element={<Recipe/>}/>
        <Route path="/Search" element={<Search/>}/>
      </Routes>   
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
