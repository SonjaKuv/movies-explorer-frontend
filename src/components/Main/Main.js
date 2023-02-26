import React, { Component } from 'react';
import './Main.css';
import Promo from "../Promo/Promo";
import NavBar from "../NavBar/NavBar";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

export class Main extends Component {
    render() {
        return (
            <main className='main'>
                <Promo />
                <NavBar />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio/>
            </main>
        )
    }
}

export default Main