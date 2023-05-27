import styles from './MoviePage.module.scss';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { Button, Carousel } from 'antd';
import PageTitle from '../../components/PageTitle/PageTitle';
import SignedImage from '../../components/SignedImage/SignedImage';
import { useState } from 'react';
import useScreenSize from '../../hooks/useScreenSize';

const MoviePage = ({ movie }) => {

  const {
    name, type, status, genre, studio, createdAt, rating, description, duration, voicing,
    mainPhotoUrl, photos, episods,
  } = movie;
  const episodsCount = episods.length;
  const [episode, setEpisode] = useState(episods[0]);

  const screenSize = useScreenSize();
  const countPhotosForSlider = () => {
    if (screenSize === 'xs') {
      return 1;
    } else if (screenSize === 's') {
      return 2;
    } else if (screenSize === 'm') {
      return 3;
    } else {
      return 4;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.mainPhoto}>
            <SignedImage url={mainPhotoUrl} alt={name} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.info__items}>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Тип</span>
                <span className={styles.info__item__value}>{type}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Епізоди</span>
                <span className={styles.info__item__value}>{episodsCount}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Статус</span>
                <span className={styles.info__item__value}>{status}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Жанр</span>
                <span className={styles.info__item__value}>{genre.join(', ')}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Студія</span>
                <span className={styles.info__item__value}>{studio}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Сезон</span>
                <span className={styles.info__item__value}>{createdAt}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Рейтинг</span>
                <span className={styles.info__item__value}>{rating}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Тривалість</span>
                <span className={styles.info__item__value}>{duration}</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item__title}>Озвучка</span>
                <span className={styles.info__item__value}>{voicing}</span>
              </div>
            </div>
            <div className={styles.description}>
              {description}
            </div>
          </div>
        </div>
        <div className={styles.pictures}>
          <PageTitle title='Скріншоти' />
          {
            photos.length > 0
            &&
            <Carousel
              autoplay
              dots={false}
              swipe={true}
              autoplaySpeed={5000}
              slidesToShow={countPhotosForSlider()}
              className={styles.picturesList}
            >
              {photos.map((photo, index) => (
                <div className={styles.picture} key={index}>
                  <SignedImage url={photo} alt={name + index} />
                </div>
              ))}
            </Carousel>
          }
        </div>
      </div>
      <div className={styles.player}>
        <div className={styles.video}>
          <VideoPlayer url={episode} />
        </div>
        <div className={styles.episodes}>
          {episods.map((episod, index) => (
            <Button
              onClick={() => setEpisode(episod)}
              key={index}
              className={`${styles.episode} ${episod === episode ? styles.episode_active : ''}`}
              disabled={episode === episod}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
