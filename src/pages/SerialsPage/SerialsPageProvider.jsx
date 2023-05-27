import React, { useContext, useEffect } from 'react';
import MoviesPage from '../MoviesPage/MoviesPage';
import AppContext from '../../context/AppContext';
import DataResolver from '../Layout/DataResolver';

const SerialsPageProvider = () => {
  const { actions } = useContext(AppContext);

  const { isLoading, error, data, refetch } = actions.getSerials;

  useEffect(() => {
    refetch();
  }, []);

  return (
    <DataResolver error={error} data={data} loading={isLoading}>
      <MoviesPage movies={data} title="Серіали" />
    </DataResolver>
  );
};

export default SerialsPageProvider;
