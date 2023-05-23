import React from 'react';
import styles from './Slider.module.scss';
import { Button, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';

const Slider = ({sliderItems}) => {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <Carousel arrows autoplaySpeed={8000} className={styles.slider}>
        {sliderItems.map((item, index) => (
          <div key={index} className={styles.slider__item}>
            <div className={styles.item__image}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={styles.item__content}>
              <h3 className={styles.content__title}>
                {item.title}
              </h3>
              <p className={styles.content__description}>
                {item.description}
              </p>
              <Button
                className={styles.content__button}
                onClick={() => handleNavigate(item.movie ? `movie/${item.id}` : item.link)}>
                Дивитися
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;