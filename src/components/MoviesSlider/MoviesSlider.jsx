import React from 'react';
import styles from './MoviesSlider.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { Carousel } from 'antd';
import MainListItem from '../MainListItem/MainListItem';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './MoviesSlider.css';

const MoviesSlider = ({ title, showMoreLink, slidesToShow, moviesGroup, showType = false }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.moviesBlock}>
      <PageTitle title={title} />
      {
        showMoreLink &&
        <div
          onClick={() => navigate(showMoreLink)}
          className={styles.showMoreButton}>
          Показати все
        </div>}
      <Carousel
        className={styles.moviesList}
        autoplay
        dots={false}
        swipe={true}
        arrows={true}
        nextArrow={<RightOutlined />}
        prevArrow={<LeftOutlined />}
        autoplaySpeed={4000}
        slidesToShow={slidesToShow}
      >
        {moviesGroup.map((movie) => (
          <MainListItem item={movie} key={movie.id} showType={showType} />
        ))}
      </Carousel>
    </div>
  );
};

export default MoviesSlider;