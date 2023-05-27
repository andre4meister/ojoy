import styles from './SupportBanner.module.scss';
import donate from '../../assets/images/donate.jpg';
import { Button } from 'antd';

const SupportBanner = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://savelife.in.ua/';
  };

  return (
    <div className={styles.container}>
      <div className={styles.donate}>
        <div className={styles.donate__image}>
          <img src={donate} alt="Donate" />
        </div>
        <div className={styles.donate__info}>
          <h2>Підтримай нас</h2>
          <p>
            Хочеш отримувати більше озвучок в чудовій якості? Зроби свій внесок в розвиток молодої української студії!
          </p>
          <Button className={styles.donate__button} onClick={handleButtonClick}>
            Підтримати
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
