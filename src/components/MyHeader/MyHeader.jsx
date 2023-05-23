import styles from './MyHeader.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import logo from '../../assets/interface/Logoojoy-white.png';
import LoginWindow from '../LoginWindow/LoginWindow';
import Sidebar from '../Sidebar/Sidebar';
import AppContext from '../../context/AppContext';
import { Button } from 'antd';

const MyHeader = ({}) => {
  const navigate = useNavigate();

  const { actions, isLoginOpen, isCartOpen, isMenuOpen } = useContext(AppContext);
  const { setIsLoginOpen, setIsCartOpen, setIsMenuOpen } = actions;

  const handleLoginClick = (event) => {
    event.stopPropagation();
    setIsLoginOpen((prev) => !prev);
    setIsCartOpen(false);
  };

  const handleCartClick = (event) => {
    event.stopPropagation();
    setIsCartOpen((prev) => !prev);
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const cartOrLoginWindow = document.querySelector(`.${styles.cartOrLoginWindow}`);

      if (cartOrLoginWindow && !cartOrLoginWindow.contains(event.target)) {
        setIsCartOpen(false);
        setIsLoginOpen(false);
      }
    };

    if (isLoginOpen || isCartOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLoginOpen, isCartOpen, setIsCartOpen, setIsLoginOpen]);

  return (
    <div className={styles.headerContainer}>
      {isMenuOpen && <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <div className={styles.burgerMenu} onClick={() => setIsMenuOpen((prev) => !prev)}>
        <svg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.62292 22.7092V20.5801H26.377V22.7092H3.62292ZM3.62292 16.0645V13.9354H26.377V16.0645H3.62292ZM3.62292 9.41977V7.2832H26.377V9.41977H3.62292Z'
            fill='currentColor'
          />
        </svg>
      </div>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img src={logo} alt='Ojoy logo' />
      </div>
      <div className={styles.navMenu}>
        <NavLink to='/movies' className={styles.navMenuItem}>
          Фільми
        </NavLink>
        <NavLink to='/serials' className={styles.navMenuItem}>
          Серіали
        </NavLink>
        <NavLink to='/schedule' className={styles.navMenuItem}>
          Розклад
        </NavLink>
        <NavLink to='/about' className={styles.navMenuItem}>
          Про нас
        </NavLink>
        <NavLink to='/contacts' className={styles.navMenuItem}>
          Контакти
        </NavLink>
      </div>
      <div className={styles.header__login}>
        <Button className={styles.loginButton} onClick={handleLoginClick}>Увійти</Button>
        {/*<UserOutlined className={styles.navMenuIcon} onClick={handleLoginClick} />*/}
        {isLoginOpen ? (
          <div className={styles.cartOrLoginWindow}>
            {isLoginOpen ? <LoginWindow setIsLoginOpen={setIsLoginOpen} /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MyHeader;
