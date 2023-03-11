import React, { Component } from 'react';
import './Main.css';
import Promo from "../../components/Promo/Promo";
import NavBar from "../../components/NavBar/NavBar";
import AboutProject from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";

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