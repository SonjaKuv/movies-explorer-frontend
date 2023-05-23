import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ onClickBurger, isBurgerOpened, children, loggedIn }) {

    return (
        <>
            <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} loggedIn={loggedIn}/>
            {children}
            <Footer />
        </>
    )
}

export default Layout