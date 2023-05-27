import React, { useContext, useEffect } from 'react';
import MainPage from './MainPage';
import AppContext from '../../context/AppContext';
import DataResolver from '../Layout/DataResolver';

const MainPageProvider = () => {
  const { actions } = useContext(AppContext);
  const { getMovies, getNewMovies, getSerials, getSliders } = actions;

  const { isLoading: isLoadingMovies, data: movies, error: errorMovies, refetch: refetchMovies } = getMovies;
  const {
    isLoading: isLoadingNewMovies,
    data: newMovies,
    error: errorNewMovies,
    refetch: refetchNewMovies,
  } = getNewMovies;
  const { isLoading: isLoadingSerials, data: serials, error: errorSerials, refetch: refetchSerials } = getSerials;
  const {
    isLoading: isLoadingSliderItems,
    data: sliderItems,
    error: errorSliderItems,
    refetch: refetchSliders,
  } = getSliders;

  const isLoading = isLoadingMovies || isLoadingNewMovies || isLoadingSerials || isLoadingSliderItems;
  const error = errorMovies || errorNewMovies || errorSerials || errorSliderItems;

  useEffect(() => {
    refetchMovies();
    refetchNewMovies();
    refetchSerials();
    refetchSliders();
  }, []);

  return (
    <DataResolver data={sliderItems} error={error} loading={isLoading}>
      <MainPage movies={movies} newMovies={newMovies} serials={serials} sliderItems={sliderItems} />
    </DataResolver>
  );
};

export default MainPageProvider;
