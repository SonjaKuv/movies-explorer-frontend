import React from 'react';
import './Main.css';
import Promo from "../../components/Promo/Promo";
import NavBar from "../../components/NavBar/NavBar";
import AboutProject from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";

function Main() {

const handleScroll = (targetComponent) => {
    const element = document.querySelector(targetComponent);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
        return (
            <main className='main'>
                <Promo />
                <NavBar handleScroll={handleScroll}/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
        )
}

export default Main