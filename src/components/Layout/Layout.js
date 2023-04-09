import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({ onClickBurger, isBurgerOpened, children }) {

    return (
        <>
            <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened}/>
            {children}
            <Footer />
        </>
    )
}

export default Layout