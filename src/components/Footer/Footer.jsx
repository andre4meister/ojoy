import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logo-big.png';
import inst from '../../assets/interface/inst.png';
import tg from '../../assets/interface/tg.png';
import yt from '../../assets/interface/yt.png';
import tiktok from '../../assets/interface/tiktok.png';

const Footer = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__logo}>
        <div className={styles.logo__image}>
          <img src={logo} alt='Ojoy logo' />
        </div>
      </div>
      <div className={styles.about__info}>
        <div className={styles.info__politics}>
          <p>© 2023 ojoy.com, всі матеріали взяті з відкритих джерел мережі інтернет для ознайомлювальних цілей та
            популяризації українського контенту. Всі права належать їх законним авторам. Наш сайт не претендує на
            авторство. У випадку порушення авторських правах - звертайтесь на пошту
            <span>ojoy@gmail.com</span>
          </p>
        </div>
        <div className={styles.about__menu}>
          <div className={styles.about__block_title}>Контакти</div>
          <div className={styles.menu_items}>
            <p className={styles.menu_item}>
              ojoy@gmail.com
            </p>
            <p className={styles.menu_item}>
              +380777000777
            </p>
          </div>
        </div>
        <div className={styles.about__collaboration}>
          <div className={styles.about__block_title}>Співпраця</div>
          <div className={styles.menu_items}>
            <p className={styles.menu_item}>
              ojoycoop@gmail.com
            </p>
            <p className={styles.menu_item}>
              +380333000333
            </p>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.about__block_title}>Ми в соціальних мережах</div>
          <div className={styles.media__icons}>
            <Link to='https://www.youtube.com/'>
              <img src={yt} alt='youtube' />
            </Link>
            <Link to='https://www.telegram.com/'>
              <img src={tg} alt='telegram' />
            </Link>
            <Link to='https://www.instagram.com/'>
              <img src={inst} alt='instagram' />
            </Link>
            <Link to='https://www.tiktok.com/'>
              <img src={tiktok} alt='tiktok' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
