import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import AboutServices from "./components/AboutServices";
export default function App() 

{
  
  return(
    <>    
    <Navbar />
    <Hero />
    <AboutServices />
    </>
  )
}

