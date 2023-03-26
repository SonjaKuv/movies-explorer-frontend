import '../Header/Header.css';
import './BurgerMenu.css';
import user from '../../images/user.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BurgerMenu({ onClickBurger, isBurgerOpened }) {
    const path = useLocation();
    const handleOnClickBurger = ({ target: { checked } }) => {
        onClickBurger(checked);
    };

    return (
        <div className="menu">
            <input id="menu__toggle" type="checkbox" onChange={handleOnClickBurger} />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <div className={isBurgerOpened ? 'menu__links-container menu__opened' : 'menu__links-container'}>
                <div className="menu__box">
                    <nav className='menu__navigation'>
                    <Link to='/'  className={(path.pathname === '/') ? ('menu__link link menu__link_type_current') : ('menu__link link')}>
                        Главная
                    </Link>
                    <Link to='/movies'  className={(path.pathname === '/movies') ? ('menu__link link menu__link_type_current') : ('menu__link link')}>
                        Фильмы
                    </Link>
                    <Link to='/saved-movies'  className={(path.pathname === '/saved-movies') ? ('menu__link link menu__link_type_current') : ('menu__link link')}>
                        Сохранённые фильмы
                    </Link>
                    </nav>
                    <Link to='/profile' className='link menu__profile-button'>
                        <button className='header__profile-button'>Аккаунт
                            <img src={user} className='header__profile-icon' alt='Пользователь' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu