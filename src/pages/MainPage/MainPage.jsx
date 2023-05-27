import styles from './MainPage.module.scss';
import Slider from '../../components/Slider/Slider';
import SupportBanner from '../../components/SupportBanner/SupportBanner';
import useScreenSize from '../../hooks/useScreenSize';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';

const MainPage = ({ newMovies, serials, movies, sliderItems }) => {
  const screenSize = useScreenSize();
  const countPhotosForSlider = () => {
    if (screenSize === 'xs') {
      return 2;
    } else if (screenSize === 's') {
      return 2;
    } else if (screenSize === 'm') {
      return 3;
    } else if (screenSize === 'l') {
      return 4;
    } else {
      return 6;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Slider sliderItems={sliderItems} />
        <MoviesSlider
          showType={true}
          title="Новинки"
          moviesGroup={newMovies}
          slidesToShow={countPhotosForSlider()}
          showMoreLink={null}
        />
        <MoviesSlider
          showType={false}
          title="Серіали"
          moviesGroup={serials}
          slidesToShow={countPhotosForSlider()}
          showMoreLink={'serials'}
        />
        <MoviesSlider
          showType={false}
          title="Фільми"
          moviesGroup={movies}
          slidesToShow={countPhotosForSlider()}
          showMoreLink={'movies'}
        />
      </div>
      <SupportBanner />
    </div>
  );
};

export default MainPage;
