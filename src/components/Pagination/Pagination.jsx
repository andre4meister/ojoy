import React from 'react';
import styles from './Pagination.module.scss';
import { Button } from 'antd';

const Pagination = ({ pagesCount, currentPage, setCurrentPage }) => {
  const array = [];
  for (let i = 0; i < pagesCount; i++) {
    array.push(i);
  }

  const handleSetCurrentPage = (page) => {
    if (page < 0 || page > pagesCount - 1 || page === currentPage) return;
    setCurrentPage(page);
  };

  return (
    <div className={styles.pagination}>
      {array.map((item) => (
        <Button
          key={item}
          className={`${styles.pagination__button} ${item === currentPage ? styles.pagination__button_active : ''}`}
          onClick={() => handleSetCurrentPage(item)}
        >
          {item + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
