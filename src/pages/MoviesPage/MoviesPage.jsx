import styles from './MoviesPage.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import MainListItem from '../../components/MainListItem/MainListItem';
import Pagination from '../../components/Pagination/Pagination';
import { useMemo, useState } from 'react';

const MoviesPage = ({ movies, title }) => {
  const pages = Math.ceil(movies.length / 18);
  const [currentPage, setCurrentPage] = useState(0);

  const showMovies = useMemo(() => {
    return movies.slice(currentPage * 18, currentPage * 18 + 18);
  }, [movies, currentPage]);

  return (
    <div className={styles.container}>
      <PageTitle title={title} />
      <div className={styles.moviesBlock}>
        <ul className={styles.moviesList}>
          {showMovies.map((serial) => (
            <MainListItem item={serial} key={serial.id} />
          ))}
        </ul>
      </div>
      <div className={styles.pagination}>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={pages} />
      </div>
    </div>
  );
};

export default MoviesPage;