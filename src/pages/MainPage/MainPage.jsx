import styles from './MainPage.module.scss';
import Slider from '../../components/Slider/Slider';
import PageTitle from '../../components/PageTitle/PageTitle';
import MainListItem from '../../components/MainListItem/MainListItem';
import SupportBanner from '../../components/SupportBanner/SupportBanner';

const MainPage = ({ newMovies, serials, movies, sliderItems }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Slider sliderItems={sliderItems} />
        <div className={styles.moviesBlock}>
          <PageTitle title='Новинки' />
          <ul className={styles.moviesList}>
            {newMovies.map((movie) => (
              <MainListItem item={movie} key={movie.id} showType={true} />
            ))}
          </ul>
        </div>
        <div className={styles.moviesBlock}>
          <PageTitle title='Серіали' />
          <ul className={styles.moviesList}>
            {serials.map((serial) => (
              <MainListItem item={serial} key={serial.id} />
            ))}
          </ul>
        </div>
        <div className={styles.moviesBlock}>
          <PageTitle title='Фільми' />
          <ul className={styles.moviesList}>
            {movies.map((movie) => (
              <MainListItem item={movie} key={movie.id}  />
            ))}
          </ul>
        </div>
      </div>
      <SupportBanner />
    </div>
  );
};

export default MainPage;