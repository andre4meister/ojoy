import React from 'react';
import styles from './Slider.module.scss';
import { Button, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignedImage from '../SignedImage/SignedImage';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Slider = ({ sliderItems }) => {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    const movieType = item.movieType && item.movieType === 'Фільм' ? 'movie' : 'serial';
    const link = item.movie ? `${movieType}/${item.movieId}` : item.link;
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <Carousel
        arrows
        nextArrow={<RightOutlined />}
        prevArrow={<LeftOutlined />}
        autoplaySpeed={6000}
        className={styles.slider}
        autoplay={true}
        pauseOnDotsHover={true}
        dots={'sliderDots'}
      >
        {sliderItems.map((item, index) => (
          <div key={index} className={styles.slider__item}>
            <div className={styles.item__image}>
              <SignedImage url={item.img} alt={item.title} />
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
                onClick={() => handleNavigate(item)}>
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