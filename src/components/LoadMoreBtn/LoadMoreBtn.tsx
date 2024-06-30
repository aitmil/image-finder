import { FC } from 'react';
import { LoadMoreBtnProps } from './LoadMoreBtnProps';
import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button
      type='button'
      className={css.btn}
      onClick={onLoadMore}
    >
      Load More
    </button>
  );
};
