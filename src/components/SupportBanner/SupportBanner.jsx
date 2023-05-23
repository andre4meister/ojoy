import styles from './SupportBanner.module.scss';
import donate from '../../assets/images/donate.jpg';
import { Button } from 'antd';

const SupportBanner = () => {
  return (
    <div className={styles.donate}>
      <div className={styles.donate__image}>
        <img src={donate} alt='Donate' />
      </div>
      <div className={styles.donate__info}>
        <h2>Підтримай нас</h2>
        <p>Хочеш отримувати більше озвучок в чудовій якості? Зроби свій внесок в розвиток молодої української
          студії!</p>
        <Button className={styles.donate__button} onClick={() => alert('support !')}>Підтримати</Button>
      </div>
    </div>
  );
};

export default SupportBanner;