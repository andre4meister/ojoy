import React, { useContext, useEffect } from 'react';
import MoviesPage from './MoviesPage';
import AppContext from '../../context/AppContext';
import DataResolver from '../Layout/DataResolver';

const MoviesPageProvider = () => {
  const { actions } = useContext(AppContext);

  const { isLoading, error, data, refetch } = actions.getMovies;

  useEffect(() => {
    refetch();
  }, []);

  return (
    <DataResolver error={error} data={data} loading={isLoading}>
      <MoviesPage movies={data} title='Фільми' />
    </DataResolver>
  );
};

export default MoviesPageProvider;