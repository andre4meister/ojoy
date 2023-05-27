import React from 'react';
import styles from './MainListItem.module.scss';
import { useNavigate } from 'react-router-dom';
import SignedImage from '../SignedImage/SignedImage';

const MainListItem = ({ item, showType = false }) => {
  const itemCreationYear = item.createdAt.split(' ')[1];
  const itemInfo = showType ? `${itemCreationYear} ${item.type}` : itemCreationYear;

  const navigate = useNavigate();
  const navigateToItem = () => {
    const base = item.type === 'Фільм' ? 'movie' : 'serial';
    navigate(`/${base}/${item.id}`);
  };

  return (
    <li className={styles.item} key={item.id}>
      <div onClick={navigateToItem} className={styles.item__image}>
        <SignedImage url={item.mainPhotoUrl} alt={item.name} />
      </div>
      <div className={styles.item__name}>{item.name}</div>
      <div className={styles.item__info}>{itemInfo}</div>
    </li>
  );
};

export default MainListItem;
