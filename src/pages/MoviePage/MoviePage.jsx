import styles from './MoviePage.module.scss';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const MoviePage = ({ item }) => {
  const { id, name, photos, price, discountPrice, isAvailable } = item;

  const { actions } = useContext(AppContext);
  const { isLoading, data, error } = actions.addItemToCart;

  const addToCart = (id) => {
    actions.addItemToCart.mutate(id);
  };


  return (
    <div className={styles.container}>

    </div>
  );
};

export default MoviePage;
