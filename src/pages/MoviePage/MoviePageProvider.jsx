import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MoviesApi as MoviesAPI } from '../../services/moviesAPI';
import checkResponseError from '../../utils/checkRespoonseError';
import { useEffect } from 'react';
import DataResolver from '../Layout/DataResolver';
import MoviePage from './MoviePage';
import { SerialsApi } from '../../services/serialsAPI';

const MoviePageProvider = () => {
  const { id } = useParams();
  const location = useLocation();
  const type = location.pathname.split('/').filter((l) => l !== '')[0];
  console.log(type);
  const {
    isLoading: isLoadingMovie,
    error: errorMovie,
    data: dataMovie,
    refetch: refetchMovie,
  } = useQuery({
    queryKey: ['movieById', { id }],
    enabled: false,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
    },
    queryFn: async () => {
      const response = await MoviesAPI.getMovieById(id);
      checkResponseError(response);
      return response.data;
    },
  });

  const {
    isLoading: isLoadingSerial,
    error: errorSerial,
    data: dataSerial,
    refetch: refetchSerial,
  } = useQuery({
    queryKey: ['serialById', { id }],
    enabled: false,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
    },
    queryFn: async () => {
      const response = await SerialsApi.getSerialById(id);
      checkResponseError(response);
      return response.data;
    },
  });

  const isTypeMovie = type === 'movie';
  const isLoading = isTypeMovie ? isLoadingMovie : isLoadingSerial;
  const error = isTypeMovie ? errorMovie : errorSerial;
  const data = isTypeMovie ? dataMovie : dataSerial;

  useEffect(() => {
    isTypeMovie ? refetchMovie(['movieById', { id }]) : refetchSerial(['serialById', { id }]);
  }, [id]);

  return (
    <DataResolver data={data} error={error} loading={isLoading}>
      <MoviePage movie={data} />
    </DataResolver>
  );
};

export default MoviePageProvider;
