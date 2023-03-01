import React from "react";
import Login from './components/Login'
import NavbarTop from "./components/NavbarTop";
import Banner from "./components/Banner";
import NavSearch from "./components/NavSearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import JackpotBanner from "./components/JackpotBanner";
import GameCard from "./components/GameCard";
import Contact from "./components/Contact";

function App() {
  return (

    <>

    <Login/>
    <NavbarTop/>
    <Banner/>
    <NavSearch/>
    <GameCard/>
    <Contact/>
    </>
 
  );
}

export default App;
